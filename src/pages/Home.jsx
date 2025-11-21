import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Login from './Login'
import UserContext from '../context/UserContex';
import HomePage from './HomePage';
import Dashboard from './Dashboard';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import Footer from '../components/Footer';

function Home()
{

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/HomePage' element={<HomePage />} />
                <Route path='/dashboard' element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
            </Routes>
            <Footer />
        </div>
    )
}

export default Home