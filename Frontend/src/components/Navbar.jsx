import React from "react";

function Navbar(){
return(
    <div className="flex justify-between p-8 text-white">
        <div>
            <h2 className="font-bold text-2xl ">
                My Restaurant
            </h2>
        </div>
        <div>
            <ul className="flex justify-between gap-8 ">
                <li className="font-bold cursor-pointer text-lg">Home</li>
                <li className="font-bold cursor-pointer text-lg">Reservations</li>
                <li className="font-bold cursor-pointer text-lg">Menu</li>
                <li className="font-bold cursor-pointer text-lg">Contact</li>
            </ul>
        </div>
    </div>
)
}

export default Navbar