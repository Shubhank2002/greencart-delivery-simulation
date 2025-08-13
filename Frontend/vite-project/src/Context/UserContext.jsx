import { createContext, useState } from "react";

export const Context=createContext()


import React from 'react'

const UserContext = ({children}) => {
    const [Profit,setProfit]=useState()
    const [isAuthenticated, setIsAuthenticated] = useState(false);



  return (
    <Context.Provider value={{Profit,setProfit,isAuthenticated,setIsAuthenticated}}>
        {children}
    </Context.Provider>
  )
}

export default UserContext
