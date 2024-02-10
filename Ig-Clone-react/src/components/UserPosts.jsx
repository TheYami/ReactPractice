import React from 'react'
import Post from '../assets/img/Small-Post.png'
import {FaClone} from 'react-icons/fa'

function UserPosts() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        <div className="post-item relative">
            <FaClone  className='absolute right-[10px] top-[10px] text-white text-2xl'/>
            <img src={Post} alt="img" className='w-full'/>
        </div>
        <div className="post-item">
            <img src={Post} alt="img" className='w-full'/>
        </div>
        <div className="post-item">
            <img src={Post} alt="img" className='w-full'/>
        </div>
        <div className="post-item">
            <img src={Post} alt="img" className='w-full'/>
        </div>
        <div className="post-item">
            <img src={Post} alt="img" className='w-full'/>
        </div>
        <div className="post-item">
            <img src={Post} alt="img" className='w-full'/>
        </div>
    </div>
  )
}

export default UserPosts