import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Home</h1>
      <Link to='/about'>Go to About page</Link>
    </div>
  )
}

export default Home
