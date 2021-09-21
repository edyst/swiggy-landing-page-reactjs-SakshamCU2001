import React from 'react'
import './section2.css'
import order from "../../images/feature1.png"
import tracking from "../../images/feature2.png"
import delivery from "../../images/feature3.png"


const Section2 = () => {
    return (
        <>
     <div className="flex">
            <div className="flex-1">
                <img width="45%" src={order}/>
                <div className="img_heading">No Minimum Order</div>
                <div className="img_detail">Order in for yourself or for the group, with no restrictions on order value</div>
            </div>
            <div className="flex-2">
                <img width="45%" src={tracking}/>
                <div className="img_heading">Live Order Tracking</div>
                <div className="img_detail">Know where your order is at all times, from the restaurant to your doorstep</div>
            </div>
            <div className="flex-3">
                <img width="50%"src={delivery} />
                <div className="img_heading">Lightning-Fast Delivery</div>
                <div className="img_detail">Experience Swiggy's superfast delivery for food delivered fresh & on time</div>
            </div>
        </div>
        </>
    )
}

export default Section2
