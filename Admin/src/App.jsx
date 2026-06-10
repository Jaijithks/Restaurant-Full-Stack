import React from 'react'
import Login from './components/Login'
import { BrowserRouter , Router , Route ,Routes } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import { useState } from 'react'
import { useEffect } from 'react'
import ListMenu from './pages/ListMenu'
import Admintable from './pages/Admintable'
import Addmenu from './pages/Addmenu'
import {ToastContainer} from 'react-toastify'

export const backendURL = "http://localhost:4000"

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token' || ''))

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    
    <BrowserRouter>
    <ToastContainer />
    {
      token === "null" ? (<Login setToken={setToken}/>) : (<> <div className='flex w-full'>
      
      <Sidebar setToken={setToken}/>
      <div className='w-[70%] ml-[max(5vw, 25px)] my-8 text-black text-base'>
        <Routes>
          <Route path='/add' element={<Addmenu token={token} />} />
          <Route path='/list' element={<ListMenu token={token}/>} />
          <Route path='/table' element={<Admintable token={token} />}/>
        </Routes>
      </div>
    </div></>)
    }
   
    </BrowserRouter>
  )
}

export default App
