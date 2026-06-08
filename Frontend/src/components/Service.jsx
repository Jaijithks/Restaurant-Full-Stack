import React from "react";
import img1 from "../assets/serv1.jpg"
import img2 from "../assets/serv2.jpg"
import img3 from "../assets/serv3.jpg"
import line from "../assets/line.png"

function Service() {
    return (
        <div>
            <div className="flex bg3">
                <div className="w-1/3">
                    <div className="p-16">
                        <img src={line} alt="line" className="-mb-2 w-45 place-self-center"/>
                        <h2 className="text-amber-300 text-center texet-4xl">Breakfast</h2>
                        <p className="text-center mt-3 ">we serve the most delicious breakfast</p>
                    </div>
                    <div>
                        <img src={img1} alt="breakfast image" className="h-160"/>
                    </div>
                </div>
                <div className="w-1/3">
                    <div>
                        <img src={img3} alt="image3" className="h-160"/>
                    </div>
                    <div className="p-16">
                        <h2 className="text-amber-300 text-center texet-4xl">Drinks</h2>
                        <p className="text-center mt-3 ">We serve the most mouth watering drinks</p>
                        <img src={line} alt="line" className="-mb-2 w-45 place-self-center"/>
                    </div>
                </div>
                   <div className="w-1/3">
                    <div className="p-16">
                        <img src={line} alt="line" className="-mb-2 w-45 place-self-center"/>
                        <h2 className="text-amber-300 text-center texet-4xl">Desert</h2>
                        <p className="text-center mt-3 ">We serve the most heartfilling deserts.</p>
                    </div>
                    <div>
                        <img src={img2} alt="image2" className="h-160"/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Service;