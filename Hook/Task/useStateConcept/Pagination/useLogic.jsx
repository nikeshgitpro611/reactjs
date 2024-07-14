import { useEffect, useState } from "react"

const useLogic = (url) => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(10)
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setLoding] = useState(true)

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

  useEffect(() => {
    fetchApi(page, pagination)
  }, [page, pagination])


  return { data, setData, pagination, setPagination, page, setPage, isLoading, error }
}

export default useLogic
