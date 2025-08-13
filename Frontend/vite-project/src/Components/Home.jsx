import React from 'react'
import Sidebar from './Sidebar'
import Login from './Authentication/Login'

const Home = () => {
  return (
    <div className=' flex'>
      <Sidebar/>
      <Login/>
    </div>
  )
}

export default Home
