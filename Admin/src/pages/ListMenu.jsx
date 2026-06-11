import React, { useEffect, useState } from 'react'
import { backendURL } from '../App'
import { toast } from 'react-toastify'
import axios from 'axios'
import { MdDeleteForever } from 'react-icons/md'

const ListMenu = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendURL}/api/product/list`, { headers: { token } })
      if (response.data.success) {
        setList(response.data.products || [])
      } else {
        toast.error(response.data.message || 'Unable to fetch products')
      }
    } catch (error) {
      console.error(error)
      toast.error(error.message || 'Error fetching products')
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this product?')) return

    try {
      const response = await axios.post(
        `${backendURL}/api/product/remove`,
        { _id: id },
        { headers: { token } }
      )

      if (response.data.success) {
        toast.success('Product removed')
        setList((prev) => prev.filter((p) => p._id !== id))
      } else {
        toast.error(response.data.message || 'Failed to remove product')
      }
    } catch (err) {
      console.error(err)
      toast.error(err.response?.data?.message || err.message || 'Remove failed')
    }
  }

  return (
    <div>
      <p className='mb-2 font-bold text-2xl'>Menu List</p>
      <div className='flex flex-col gap-2'>
        <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg font-semibold '>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
        {list.map((item) => (
          <div key={item._id} className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg  '>
            <img src={item.image} alt='' className='w-[50px] h-auto ' />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{item.price}</p>
            <div className='flex items-center justify-center'>
              <MdDeleteForever onClick={() => handleDelete(item._id)} className='text-[28px] cursor-pointer text-red-700' />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ListMenu
