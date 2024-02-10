import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import  './navigation.css'

import { FaBars } from "react-icons/fa6";
import { FaWindowClose } from "react-icons/fa";

import MenuData from '../data/MenuData';

function Navigation() {
    const [showMenu,setShowMenu] = useState(false)
    const toggleMenu = ()=>setShowMenu(!showMenu)
  return (
    <aside>
        <div className='navbar'>
            <div className="navbar-toggle">
                <Link to="#" className='menu-bar'>
                    <FaBars onClick={toggleMenu}/>
                    </Link>
            </div>
        </div>
        <nav className={showMenu ? "nav-menu active" : "nav-menu"}>
            <ul className='menu-item' onClick={toggleMenu}>
                <li navbar-toggle>
                    <Link to="#">
                        <FaWindowClose onClick={toggleMenu}/>
                    </Link>
                </li>

                {MenuData.map((menu,index)=>{
                    return (
                    <li className='menu-link' key={index}>
                        <Link to={menu.path}>{menu.icon}<span>{menu.title}</span></Link>
                    </li>
                    )
                })}
            </ul>
        </nav>
    </aside>
  )
}

export default Navigation
