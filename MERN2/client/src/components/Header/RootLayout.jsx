import React from 'react'
import HeaderNavigate from './HeaderNavigate'

const RootLayout = ({children}) => {
  return (
    <div>
      <HeaderNavigate />
      <main></main>
    </div>
  )
}

export default RootLayout
