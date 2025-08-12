import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-[25vw] h-screen bg-black rounded-2xl flex flex-col text-3xl font-bold p-5 text-white justify-center gap-10'>
      <Link to='/dashboard' className='hover:scale-125 transition-transform delay-200 duration-200'>Dashboard</Link>
      <Link to='/simulation' className='hover:scale-125 transition-transform delay-200 duration-200'>Simulation</Link>
      <Link to='/drivers' className='hover:scale-125 transition-transform delay-200 duration-200 text-[20px]'>Create Driver</Link>
      
    </div>
  )
}

export default Sidebar
