import React from 'react'
import Login from './components/Login'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { useState, useEffect } from 'react'
import ListMenu from './pages/ListMenu'
import Admintable from './pages/Admintable'
import Addmenu from './pages/Addmenu'
import { ToastContainer } from 'react-toastify'

export const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:4000'

const App = () => {
  const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken && initialToken !== 'null' ? initialToken : '')

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  return (
    <BrowserRouter>
      <ToastContainer />
      {!token ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <div className='flex w-full'>
            <Sidebar setToken={setToken} />
            <div className='w-[70%] ml-[max(5vw, 25px)] my-8 text-black text-base'>
              <Routes>
                <Route path='/' element={<Addmenu token={token} />} />
                <Route path='/add' element={<Addmenu token={token} />} />
                <Route path='/list' element={<ListMenu token={token} />} />
                <Route path='/table' element={<Admintable token={token} />} />
                <Route path='*' element={<Navigate to='/' replace />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </BrowserRouter>
  )
}

export default App
