import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import { Outlet } from 'react-router-dom'
import NavBar from './components/custom/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div >
   <div className='w-full h-16 fixed top-0 z-10 shadow-xl bg-white'>
            <NavBar />
        </div>
   <Outlet/>
   </div>
   </>
  )
}

export default App
