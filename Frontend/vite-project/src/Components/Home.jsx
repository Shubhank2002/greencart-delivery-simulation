import React from 'react'
import Sidebar from './Sidebar'
import Login from './Authentication/Login'

const Home = () => {
  return (
    <div className='bg-black w-screen flex'>
      <Sidebar/>
      <Login/>
    </div>
  )
}

export default Home
