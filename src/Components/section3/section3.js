

import React from 'react'
import'./section3.css';
import playstore from "../../images/googleplay.png"
import macos from "../../images/appstore.png"
import res1 from "../../images/restaurantinpocket1.png"
import res2 from "../../images/restaurantinpocket2.png"


const section3 = () => {
    return (
        <div>
           <div className="flex_main">
            <div className="left_section">
                <div className="heading_div">Restaurants in your pocket</div>
                <div className="subheading_div">
                Order from your favorite restaurants & track on the go, with the all-new Swiggy app.
                </div>
                <div className="images">
                <a href="https://web.archive.org/web/20210903174711/https://play.google.com/store/apps/details?id=in.swiggy.android">
                    <img width="90%" src={playstore}/>
                </a>
                <a href="https://web.archive.org/web/20210903174711/https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920">
                    <img width="90%" src={macos}/>
                </a>
                </div>
            </div>
            <div className="right_section">
                <img  src={res1} style={{paddingBottom:"6%"}} />
                <img src={res2}  style={{paddingBottom:"0.5%"}} />
            </div>
        </div>
        </div>
    )
}

export default section3
