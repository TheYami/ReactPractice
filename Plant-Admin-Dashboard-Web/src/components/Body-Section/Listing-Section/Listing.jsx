import React from 'react'
import './listing.css'

import { FaArrowRight,FaHeart } from "react-icons/fa";
import img from '../../../assets/img/plants2-removebg-preview.png'
import img1 from '../../../assets/img/plants6-removebg-preview.png'
import img2 from '../../../assets/img/plants4-removebg-preview.png'
import img3 from '../../../assets/img/plants5-removebg-preview.png'
import user from '../../../assets/img/user.jpg'
import user1 from '../../../assets/img/user1.jpg'
import user2 from '../../../assets/img/user2.jpg'
import user3 from '../../../assets/img/user3.jpg'

function Listing() {
  return (
    <div className='listing__section'>
      <div className="heading flex">
        <h1>My Listings</h1>
        <button className='btn flex'>See All<FaArrowRight /></button>
      </div>

      <div className="listing__container flex">
        <div className="single__item">
          <FaHeart className='icon'/>
          <img src={img} alt="img" />
          <h3>Annual Vince</h3>
        </div>

        <div className="single__item">
          <FaHeart className='icon'/>
          <img src={img1} alt="img" />
          <h3>Annual Vince</h3>
        </div>
        
        <div className="single__item">
          <FaHeart className='icon'/>
          <img src={img2} alt="img" />
          <h3>Annual Vince</h3>
        </div>

        <div className="single__item">
          <FaHeart className='icon'/>
          <img src={img3} alt="img" />
          <h3>Annual Vince</h3>
        </div>
      </div>

      <div className="sellers flex">
        <div className="topsellers">
          <div className="heading flex">
            <h3>Top Sellers</h3>
            <button className='btn flex'>See All<FaArrowRight /></button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user} alt="img" />
              <img src={user1} alt="img" />
              <img src={user2} alt="img" />
              <img src={user3} alt="img" />
            </div>

            <div className="cardtext">
              <span>32.437 Plants sold <br />
                <small>27 Sellers <span className="date">7 Days</span></small>
              </span>
            </div>
          </div>
        </div>

        <div className="featuresellers">
          <div className="heading flex">
            <h3>Feature Sellers</h3>
            <button className='btn flex'>See All<FaArrowRight /></button>
          </div>

          <div className="card flex">
            <div className="users">
              <img src={user1} alt="img" />
              <img src={user3} alt="img" />
              <img src={user} alt="img" />
              <img src={user2} alt="img" />
            </div>

            <div className="cardtext">
              <span>422.873 Plants sold <br />
                <small>108 Sellers <span className="date">31 Days</span></small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Listing