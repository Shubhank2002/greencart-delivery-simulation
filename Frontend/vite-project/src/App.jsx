import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Simulation from './Components/Simulation'
import CreateDriver from './Components/CreateDriver'
import CreateOrder from './Components/CreateOrder'
import CreateRoutes from './Components/CreateRoutes'
import { useContext } from 'react'
import { Context } from './Context/UserContext'

function App() {
  const [count, setCount] = useState(0)
  const {setIsAuthenticated,isAuthenticated}=useContext(Context)
  useEffect(() => {
    const cookies = document.cookie.split(';').map(c => c.trim());
    const tokenCookie = cookies.find(c => c.startsWith('token='));
    setIsAuthenticated(!!tokenCookie);
  }, []);


  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/dashboard' element={isAuthenticated?<Dashboard/>:<Navigate to='/'/>}/>
          <Route path='/simulation' element={isAuthenticated?<Simulation/>:<Navigate to='/'/>}/>
          <Route path='/drivers' element={isAuthenticated?<CreateDriver/>:<Navigate to='/'/>}/>
          <Route path='/orders' element={<CreateOrder/>}/>
          <Route path='/routes' element={<CreateRoutes/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
