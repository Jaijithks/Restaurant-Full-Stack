import React, { useState } from 'react'
import image1 from '../assets/upload.png'
import axios from 'axios'
import { backendURL } from '../App'
import { toast } from 'react-toastify'

const Addmenu = ({ token }) => {


  const [image,setImage] = useState(null);
  const [name ,setName] = useState('');
  const [description ,setDescription] = useState('');
  const [category ,setCategory] = useState('All');
  const [price ,setPrice] = useState(0);

  const onSubmitHandler = async (e) =>{
    e.preventDefault()
    try {
      const formData = new FormData()
        formData.append("name", name)
        formData.append("description", description)
        formData.append("category", category)
        formData.append("price", price)
        if(image) formData.append("image", image)
          const response = await axios.post(`${backendURL}/api/product/add`, formData, {headers: {token}})
        if (response.data.success) {
            toast.success(response.data.message)
            setName('')
            setCategory('All')
            setDescription('')
            setPrice(0)
            setImage(null)
        } else {
          toast.error(response.data.message || 'Upload failed')
        }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <div>
      <form className='flex flex-col items gap-1 ' onSubmit={onSubmitHandler}>
        <div>
          <p>
            Upload image
          </p>
          <div>
            <label htmlFor="image"><img src={!image ? image1 : URL.createObjectURL(image)} alt='an image' className='w-32 cursor-pointer ' /></label>
            <input type='file' onChange={(e) => setImage(e.target.files[0])} id='image' hidden />
          </div>
        </div>
        <div className='w-full'>
        <p className='mb-2 text-[22px] '>product name</p>
        <input className='w-full max-w-[500px] p04 border border-gray300 rounded' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='product name here' required />

        </div>
        <div className='w-full'>
          <p className='mb-2 text-[22px] '>product description</p>
          <input  className='w-full max-w-[500px] p04 border border-gray300 rounded' type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder='enter product description'  required/>
        </div>
        <div className='flex flex-wrap gap-4 w-full'> 
          <p className='mb-2 text-[22px]'>product category</p>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className='w-full nax-w-[500px] p-3 border border-gray-300 text-[16px] rounded'>
            <option value="All">All</option>
            <option value="Spaghetti">Spaghetti</option>
            <option value="Pizza">Pizza</option>
            <option value="Rice">Rice</option>
            <option value="Noodles">Noodles</option>
            <option value="Chicken">Chicken</option>
            <option value="Drinks">Drinks</option>
          </select>
        </div>
        <div>
          <p className='mb-2 text-[22px] '>product price</p>
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder='40' className='w-full max-w-[120px] p-4 border border-gray-400 rounded'/>
        </div>
        <div>
          <button type='submit' className='mt-6 px-20 py-3 bg-amber-500 rounded hover:opacity-80'>Add menu</button>
        </div>
      </form>
    </div>
  )
}

export default Addmenu
