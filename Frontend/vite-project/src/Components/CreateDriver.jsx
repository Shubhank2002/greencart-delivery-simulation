import React, { useState } from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'

const CreateDriver = () => {
    const [formData,setformData]=useState({name:'',shift_hours:'',})
    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            const payload={
                ...formData,
                shift_hours:Number(formData.shift_hours)
            }
            const res=await axios.post('https://greencart-delivery-simulation.onrender.com/drivers/create',payload)
            if(res.status==200){
              alert(`New Driver named ${formData.name} created successfully`)
              setformData({name:'',shift_hours:""})
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setformData({
            ...formData,[name]:value
        })
    }
  return (
    <div className='flex'>
      <Sidebar/>
      <div className=' flex flex-col w-[75vw] h-[100vh] justify-center items-center gap-10'>
        <h1 className='text-3xl font-bold'>Create Drivers</h1>
        <form onSubmit={handleSubmit} className='flex flex-col gap-20 border-1 rounded-2xl p-10'>
            <input type="text" className='border-1 rounded-lg p-3 text-center' placeholder='name..' name='name' onChange={handleChange} value={formData.name}/>
            <input type="number" className='border-1 rounded-lg p-3 text-center' placeholder='shift_hours' name='shift_hours' onChange={handleChange} value={formData.shift_hours}/>
            <button type='submit' className='cursor-pointer border-2 bg-[#00AC4F] rounded-lg text-white p-3 hover:scale-110 transition-transform delay-150 duration-300'>Create</button>
        </form>
      </div>
    </div>
  )
}

export default CreateDriver
