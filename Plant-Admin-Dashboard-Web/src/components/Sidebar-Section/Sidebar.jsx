import React from 'react'
import './sidebar.css'

import logo from '../../assets/img/leaf.png'
import { IoSpeedometerOutline,IoBicycleOutline,IoCompassOutline,IoTrophyOutline,IoPieChartOutline,IoTrendingUpOutline,IoCall,IoCardOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";

function Sidebar() {
  return (
    <div className='sidebar grid'>
        <div className="logo flex">
            <img src={logo} alt="img" />
            <h2>Planti</h2>
        </div>

        <div className="menu">
            <h3 className="title">QUICK MENU</h3>

            <ul className="menu__list">
                <li className="list__item">
                    <a href="" className="menu__link flex">
                    <IoSpeedometerOutline className='icon'/>
                    <span className="small__text">Dash Board</span>
                    </a>
                </li>

                <li className="list__item">
                    <a href="" className="menu__link flex">
                    <IoBicycleOutline  className='icon'/>
                    <span className="small__text">My Orders</span>
                    </a>
                </li>

                <li className="list__item">
                    <a href="" className="menu__link flex">
                    <IoCompassOutline className='icon'/>
                    <span className="small__text">Explore</span>
                    </a>
                </li>

                <li className="list__item">
                    <a href="" className="menu__link flex">
                    <IoTrophyOutline className='icon'/>
                    <span className="small__text">Products</span>
                    </a>
                </li>
            </ul>
        </div>

        <div className="setting">
            <h3 className="title">SETTINGS</h3>

            <ul className="menu__list">
                <li className="list__item">
                    <a href="" className="menu__link flex">
                    <IoPieChartOutline className='icon'/>
                    <span className="small__text">Charts</span>
                    </a>
                </li>

                <li className="list__item">
                    <a href="" className="menu__link flex">
                    <IoTrendingUpOutline  className='icon'/>
                    <span className="small__text">Trends</span>
                    </a>
                </li>

                <li className="list__item">
                    <a href="" className="menu__link flex">
                    <IoCall className='icon'/>
                    <span className="small__text">Contact</span>
                    </a>
                </li>

                <li className="list__item">
                    <a href="" className="menu__link flex">
                    <IoCardOutline className='icon'/>
                    <span className="small__text">Billing</span>
                    </a>
                </li>
            </ul>
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
  )
}


export default Sidebar