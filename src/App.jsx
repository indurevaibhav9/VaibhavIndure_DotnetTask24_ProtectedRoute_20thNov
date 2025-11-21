import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './context/UserContex'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
function App() {
  const [user, setUser] = useState(null)

  return (
    <>
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Home/>
      </UserContext.Provider>
    </BrowserRouter>
    </>
  )
}

export default App
