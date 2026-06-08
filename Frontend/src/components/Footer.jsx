import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer(){
    return(
 <div className="bg3 flex flex-col gap-12 px-16 py-16">
    <div className="grid place-content-center gap-6 text-center">
        <h2 className="text-4xl font-bold">Get latest update on all orders</h2>
        <p className="text-lg text-gray-400">Subscribe our channel</p>
        <div className="flex items-center justify-center max-w-xl mx-auto w-full ">
            <input type="emailt" placeholder="you@gmail.com" className="flex-grow px-4 py-3 border-2 border-r-0 border-amber-500 outline-none text-sm"/>
            <button className="bg-amber-500 text-white  px-6 py-3 font-bold"> Join Now!!</button>
        </div>
    </div>
    <div>
        <div className="flex -flex-col md:flex-row  gap-justify-between items-center md:items-left gap-6">
            <h2 className="text-2xl font-bold">Your Restaurant</h2>
            <div className="flex justify-between md:justify-start gap-4 mt-3 text-orange-300">
                <FaFacebook text-3xl cursor-pointer/>
                <FaInstagram />
            </div>
        </div>
        <div>
            <ul className="flex gap-5 jusitfy-center text-base font-medium">
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Privacy policy</li>
            </ul> 
        </div>
    </div>
    <p className="text-center size-small  mt-4">@ Your Restaurant All Rights Reserved</p>
 </div>
    );
}

export default Footer