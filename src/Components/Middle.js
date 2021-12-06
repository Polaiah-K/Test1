import React from 'react'
import '../Styles/Middle.css'
import img from '../Images/digital_laptop.jpg'
import gro from '../Images/banner_smart_tab.jpg'

export const Middle = () => {
    return (
        <div id="test2">
            <div class="columntv" >
                <h2>FREE SHIPPING</h2>
                <p>	Free shipping on all US order</p>
            </div>
            <div class="columntv" >
                <h2>SUPPORT 24/7</h2>
                <p>Contact us 24 hours a day, 7 days a week.</p>
            </div>
            <div class="columntv" >
                <h2>30 DAYS RETURN</h2>
                <p>Simply return it within 30 days for an exchange.</p>
            </div>
            <div class="columntv" >
                <h2>100% PAYMENT SECURE</h2>
                <p>We ensure secure payment with PEV</p>
            </div>
            <div>
                <div class="row1">
                    <div class="column8"  >
                       
                        <img src={gro} alt="" class="img1" href="/library"></img>
                        
                    </div>
                    <div class="column8"  >
                       
                        <img src={img} alt="" class="img1" href="/library"></img>
                    </div>
                </div>
            </div>
        </div>


    )
}
