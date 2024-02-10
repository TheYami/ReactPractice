import React from 'react'
import Profile from '../assets/img/Profile-Pic.png'
import {FaEllipsisH} from 'react-icons/fa'

function UserInfo() {
  return (
    <div className='flex md:h-40 lg:h-40 mt-10'>
        <div className="profile-pic w-full md:w-80 lg:w-80 mb-5 lg:m-0 flex justify-center">
            <img src={Profile} alt="img" />
        </div>
        <div className="profile-info">
            <div className="info-top flex items-center justify-center lg:justify-start md:justify-start">
                <h2 className='text-2xl mr-[20px]'>_BIG._.WN_</h2>
                <button className='bg-[#0095f6] py-2 px-6 text-white rounded-md mr-[20px]'>Follow</button>
                <a href="#"><FaEllipsisH /></a>
            </div>

            <div className="info-mid flex my-5 justify-center lg:justify-start md:justify-start">
                <p className='mr-[20px]'>1.228 Posts</p>
                <p className='mr-[20px]'>108M followers</p>
                <p>5.521 followings</p>
            </div>
            <div className="info-bottom text-center md:text-left lg:text-left">
                <p>Weerawat Nunsuwan</p>
            </div>
        </div>
    </div>
  )
}

export default UserInfo