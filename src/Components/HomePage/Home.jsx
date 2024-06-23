import React from 'react'
import './Home.css'
import hand_icon from '../Assests/hand_icon.png'
import model from '../Assests/model.png'
import arrow from '../Assests/arrow.png'


function Home() {
  return (
    <div className="home">
        <div className="home-left">
            <h2>NEW ARRIVAL ONLY</h2>
            <div>
                <div className="home-hand-icon">
                <p>new</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="home-latest-btn">
                <div>Latest Collections</div>
                <img src={arrow} alt="" />
            </div>
        </div>

        <div className="home-right">
            <img src={model} alt="" />
        </div>

    </div>
  )
}

export default Home