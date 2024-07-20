import React from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError()

  return (
    <div>
      <h2>Some Things Went wrong</h2>
      <p>{error.data || error.message}</p>
      <button onClick={()=> navigate(-1)}>⬅️ Back To</button>
    </div>
  )
}

export default Error