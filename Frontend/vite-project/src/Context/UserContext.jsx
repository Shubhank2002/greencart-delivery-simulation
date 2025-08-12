import { createContext, useState } from "react";

export const Context=createContext()


import React from 'react'

const UserContext = ({children}) => {
    const [Profit,setProfit]=useState()

  return (
    <Context.Provider value={{Profit,setProfit}}>
        {children}
    </Context.Provider>
  )
}

export default UserContext
