import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Sidebar = ({setToken}) => {
  return (
    <div className='w-[22%] min-h-screen border-r-2  border-gray-200 bg-white'>
      <div className='mt-4 px-6'>
        <h2 className='text-[32px] font-bold '>Your Restaruant</h2>
      </div>
      <div className='flex flex-col gap-4 pt-6'>
        <nav>
            <Link to={'/add'} className='flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-white hover-cursor'>Add menu</Link>
            <Link to={'/list'} className='flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-white hover-cursor'>Menu list</Link>
             <Link to={'/table'} className='flex items-center gap-3 px-6 py-3 border-b-2 border-gray-200 text-gray-600 hover:bg-amber-500 hover:text-white cursor-pointer'>Reservations</Link>
             <button
               onClick={() => setToken('')}
               className='px-6 py-3 border-b-2 border-black hover:bg-red-500 hover:text-white hover-cursor'
             >
               LogOut
             </button>
        </nav>
      </div>
    </div>
  )
}

export default Sidebar
