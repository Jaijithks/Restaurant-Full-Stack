import { createContext, useEffect, useState } from 'react'
import {  product } from '../assets/assets'
import { backendURL } from '../App'
import axios from 'axios'
import {toast} from 'react-toastify'


export const MenuContext = createContext()

const MenuContextProvider = ({ children }) => {
    const [products, setProducts] = useState(product)

    const getProductdata = async () =>{
        try {
            const response = await axios.get(`${backendURL}/api/product/list`)
            if(response.data.success){
                setProducts(response.data.products)
            }
            else{
                console.log(error);
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

useEffect(() =>{
    getProductdata();
},[])

    return <MenuContext.Provider value={{ products }}>{children}</MenuContext.Provider>
}

export default MenuContextProvider