import React from "react";
import bgImage from "../assets/hero.jpg"
import line from "../assets/line2.png"
import Navbar from "./Navbar";

function Hero(){
return(
    <div className="relative h-screen width-full bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bgImage})`}}>
        <Navbar />
        <div className="relative z-20 flex flex-col items-center jusitfy-center h-full text-center text-whit px-4 -mt-10">
            <img src={line} alt="aline"/>
            <h2 className="text-lg md:text-xl mb-4 -tracking-widest uppercase">Where delight meets taste</h2>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">My Restaurant</h1>
            <button className="bg-amber-500 text-black py-3 px-4 hover:bg-amber-600">Book A Table</button>
        </div>
    </div>
)

}

export default Hero