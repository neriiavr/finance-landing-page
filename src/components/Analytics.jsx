import React from "react";
import Laptop from "../Assets/laptop.jpg"

const Analytics = () => {
    
    return (
        <div className="w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
                <div className="flex flex-col justify-center">
                    <p className="text-[#00cf9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl py-2">Manage Data Analytics Centrally</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Suspendisse quis nulla eget arcu porta aliquam eget ut mi. 
                    Ut quis arcu at enim tincidunt ullamcorper. Curabitur commodo lorem vel 
                    volutpat aliquet. Pellentesque in diam dapibus, tempor nulla quis, 
                    vestibulum neque. Vestibulum neque risus, tempus sed fermentum ut, 
                    facilisis a neque. Proin euismod magna nec blandit pulvinar. Aenean 
                    tempor mauris tristique cursus tincidunt. Pellentesque condimentum eget 
                    mauris nec ultrices.
                    </p>
                    <button className="bg-black w-[200px] rounded-md my-6 mx-auto py-3 text-[#00df9a]">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics