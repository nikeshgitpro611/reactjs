import { useEffect, useState } from "react"

const useLogic = (url) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(10)
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setLoding] = useState(true);
  const [searchContent, setSearchContent] = useState('')
  const [serchData, setSearchData] = useState([])

  const fetchApi = async (page, pagination) => {
    try {
      const responnce = await fetch(url);
      if (!responnce.ok) {
        throw new Error('Hey! something wrong..')
      }
      const json = await responnce.json();

      // Pagination
      const paginationPage = pagination * page;
      const paginationRemove = paginationPage - pagination;
      const paginationSlice = json.slice(paginationRemove, paginationPage);
      setData(paginationSlice);
      setLoding(false)

      

    } catch (error) {
      setError(error.message)
    }
  }

  const searchMe = () => {
    if (searchContent != '') {
      const serachFilter =  data.filter(dataSearch => dataSearch.title.includes(searchContent))
      // console.log('searchContent : ', serachFilter)
      setSearchData(serachFilter)
    }
  }

  useEffect(() => {
    fetchApi(page, pagination)
    searchMe()
  }, [page, pagination, searchContent])


  return { data, setData, pagination, setPagination, page, setPage, isLoading, error, searchContent, setSearchContent, serchData }
}

export default useLogic
