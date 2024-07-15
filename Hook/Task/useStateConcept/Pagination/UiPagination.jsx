import React from 'react'
import useLogic from './useLogic'

const UiPagination = () => {
  const Hook = useLogic('https://jsonplaceholder.typicode.com/posts');
  const { data, setData, pagination, setPagination, page, setPage, isLoading, error, searchContent, setSearchContent, serchData } = Hook;

  const handleRemove = (id) => {
    const filterData = data.filter(data => data.id != id)
    setData(filterData)
  }

  const handelChangePage = (e) => {
    const pageGet = Number(e.target.value)
    setPagination(pageGet)
    setPage(1)
  }

  if (isLoading) {
    return <p>Loading ....</p>
  }

  if (error) {
    return <p>{error}</p>
  }

  console.log('serchData : ', serchData)
  return (
    <div>
      <h2>Hook With Pagination</h2>
      <input type="text" placeholder='search me...' value={searchContent} onChange={(e) => setSearchContent(e.target.value)} style={{ padding: '12px 11rem' }} />


      {data.length === 0 ? 'No Data existing...' : (
        <div>
          {/* {serchData.length === 0  && <h2>No filter data found</h2>} */}
          {serchData.length ? (
            <div className="">
              {serchData.map(dataGet => {
                const { id, title, body } = dataGet;

                return (
                  <div key={id} style={{
                    padding: '1px', 
                    margin: '2rem',
                  }}>
                    <h4 style={{color: 'red'}}>{title}</h4>
                    <p style={{color : 'green', fontFamily: 'sans-serif'}}> {body}</p>
                    {/* <button onClick={() => handleRemove(id)}>❌</button> */}
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="">
              {data.map(dataGet => {
                const { id, title } = dataGet;

                return (
                  <div key={id} style={{
                    padding: '1px', border: '1px solid red',
                    margin: '2rem', display: 'flex',
                    justifyContent: 'center', alignItems: 'center', gap: '2rem', borderRadius: '50px'
                  }}>
                    <p>{title}</p>
                    <button onClick={() => handleRemove(id)}>❌</button>
                  </div>
                )
              })}
            </div>
          )}
          {/* {data.map(dataGet => {
            const { id, title } = dataGet;

            return (
              <div key={id} style={{
                padding: '1px', border: '1px solid red',
                margin: '2rem', display: 'flex',
                justifyContent: 'center', alignItems: 'center', gap: '2rem', borderRadius: '50px'
              }}>
                <p>{title}</p>
                <button onClick={()=>handleRemove(id)}>❌</button>
              </div>
            )
          })} */}
          <span>page {page} of 10</span>
          <div className="">
            <button onClick={() => setPage(prev => prev - 1)} disabled={page === 1}>⬅️</button>
            <button onClick={() => setPage(prev => prev + 1)} disabled={page === 10}>➡️</button>
          </div>

          <div className="">
            <select value={pagination} onChange={handelChangePage}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>

          <button onClick={() => setData([])}>All 🆑</button>
        </div>
      )}

    </div>
  )
}

export default UiPagination
