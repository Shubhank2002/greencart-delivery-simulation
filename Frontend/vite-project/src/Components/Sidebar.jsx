import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[25vw] h-screen bg-black rounded-2xl flex flex-col gap-5 text-white'>
      <Link to='/dashboard'>Dashboard</Link>
      <Link to='/simulation'>Simulation</Link>
    </div>
  )
}

export default Sidebar
