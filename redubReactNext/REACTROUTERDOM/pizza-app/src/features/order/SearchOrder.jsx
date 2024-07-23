import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

//Creat Input
//after inter need bo move value on url /order/input type
const SearchOrder = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate()
  const handelSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    navigate(`/order/${search}`)
    setSearch('')
  }

  return (
    <div>
      <form action="" onSubmit={handelSubmit}>

      <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
      </form>
    </div>
  )
}

export default SearchOrder