import React from 'react'
import './activity.css'

import { FaArrowRight } from "react-icons/fa";
import user from '../../../assets/img/user.jpg'
import user1 from '../../../assets/img/user1.jpg'
import user2 from '../../../assets/img/user2.jpg'
import user3 from '../../../assets/img/user3.jpg'
import user4 from '../../../assets/img/admin.jpg'

function Activity() {
  return (
    <div className='activity__section'>
      <div className="heading flex">
        <h1>Resent Activity</h1>
        <button className="btn">See All<FaArrowRight className='icon'/></button>
      </div>

      <div className="accontainer grid">
        <div className="customer flex">
          <img src={user} alt="img" />

          <div className="customer__detail">
            <span className='name'>sarah Midtown</span>
            <small>Order a new plants</small>
          </div>

          <div className="duration">
            2 mins ago
          </div>
        </div>
        <div className="customer flex">
          <img src={user3} alt="img" />

          <div className="customer__detail">
            <span className='name'>King Violet</span>
            <small>Order a new plants</small>
          </div>

          <div className="duration">
            56 mins ago
          </div>
        </div>
        <div className="customer flex">
          <img src={user2} alt="img" />

          <div className="customer__detail">
            <span className='name'>Corner Obayan</span>
            <small>Order a new plants</small>
          </div>

          <div className="duration">
            10 mins ago
          </div>
        </div>

        <div className="customer flex">
          <img src={user1} alt="img" />

          <div className="customer__detail">
            <span className='name'>Jeab Yheabkee</span>
            <small>Order a new plants</small>
          </div>

          <div className="duration">
            2 hours ago
          </div>
        </div>

        <div className="customer flex">
          <img src={user4} alt="img" />

          <div className="customer__detail">
            <span className='name'>Ultraman Max</span>
            <small>Order a new plants</small>
          </div>

          <div className="duration">
            1 day ago
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity