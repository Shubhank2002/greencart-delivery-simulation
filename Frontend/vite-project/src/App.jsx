import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import Simulation from './Components/Simulation'
import CreateDriver from './Components/CreateDriver'
import CreateOrder from './Components/CreateOrder'
import CreateRoutes from './Components/CreateRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/simulation' element={<Simulation/>}/>
          <Route path='/drivers' element={<CreateDriver/>}/>
          <Route path='/orders' element={<CreateOrder/>}/>
          <Route path='/routes' element={<CreateRoutes/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
