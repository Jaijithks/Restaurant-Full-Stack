import { useState } from "react"
import { toast } from "react-toastify"
import { backendURL } from "../app"
import axios from "axios";

function Login({setToken}){
const [email , setEmail]= useState('')
const [password , setPassword]=  useState('')

const onSubmitHandler = async (e) =>{
    try {
        e.preventDefault();

        const response = await axios.post( backendURL +'/api/user/admin', {email , password})
        if(response.data.success){
            console.log(response)
            setToken(response.data.token)
            console.log(response.data.message)
        }
    } catch (error) {
        console.log(error);
    }
}
    return  (
        <div>
            <div className="flex justify-center items-center min-h-screen bg-gray-300">
                <div className="bg-white shadow-mid rounded-1g px-8 py-6 w-fill max-w-md">
                    <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Admin login</h1>
                    <form onSubmit={onSubmitHandler}>
                        <div className="mb-4 ">
                            <p className=" text-sm font-semibold text-gray-600 mb-2">Email address</p>
                            <input type="email" value={email} onChange={(e)=>{
                                setEmail(e.target.value)
                            }} placeholder="you@gmail.com" required className="w-[95%] px-3 py-2  border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-800"  />
                        </div>
                        <div className="mb-4">
                            <p className=" text-sm font-semibold text-gray-600 mb-2">Password</p>
                            <input type="password" value={password} onChange={(e)=>{
                                setPassword(e.target.value)
                            }} placeholder="********" required className="w-[95%] px-3 py-2  border border-gray-300 rounded-md text-sm focus:outline-none focus:border-gray-800"/>
                        </div>
                        <button type="submit" className="w-full px-3 py-2 text-lg font-bold bg-amber-400 rounded-md">login</button>
                    </form>
                </div>
            </div>
        </div>
    )
  
}
export default Login