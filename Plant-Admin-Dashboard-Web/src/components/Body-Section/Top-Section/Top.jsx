import React from 'react'
import './top.css'

import { IoIosSearch,IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { FaArrowRight,FaRegQuestionCircle } from "react-icons/fa";

import admin from '../../../assets/img/admin.jpg'
import tree from '../../../assets/img/tree.mp4'
import plants from '../../../assets/img/autumn.png'

function Top() {
  return (
    <div className='top__section'>
        <div className="header__section flex">
            <div className="title">
                <h1>Welcome to Planti.</h1>
                <p>Hello TheYami, Welcome back!</p>
            </div>

            <div className="searchbar flex">
                <input type="text" placeholder='Search Dashboard'/>
                <IoIosSearch  className='icon'/>
            </div>

            <div className="admin flex">
                <AiOutlineMessage className='icon'/>
                <IoMdNotificationsOutline className='icon'/>

                <div className="admin__img">
                    <img src={admin} alt="img" />
                </div>
            </div>
        </div>

        <div className="card__section flex">
            <div className="rightcard flex">
                <h1>Create and sell extraordinary products</h1>
                <p>The world's fast growing industry today are  natural made products</p>

                <div className="buttons flex">
                    <button className="btn">Explore More</button>
                    <button className="btn transparent">Top Sellers</button>
                </div>

                <div className="video">
                    <video src={tree} autoPlay loop muted></video>
                </div>
            </div>

            <div className="leftcard flex">
                <div className="main flex">
                    <div className="text">
                        <h1>My Stat</h1>

                        <div className="flex">
                            <span>Today <br /> <small>4 Orders</small></span>
                        </div>

                        <div className="flex">
                            <span>This month <br /> <small>127 Orders</small></span>
                        </div>

                        <span className="flex link">Go to my orders<FaArrowRight className='icon'/></span>
                    </div>

                    <div className="img">
                        <img src={plants} alt="img" />
                    </div>

                    <div className="sidebar__card">
                         <FaRegQuestionCircle className='icon'/>

                        <div className="card__content">
                            <div className="circle1"></div>
                            <div className="circle2"></div>
                            <h3>Help Center</h3>
                            <p>Having trouble in Planti,Please contact us from for more question.</p>
                            <button className="btn">Go to Help Center</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Top