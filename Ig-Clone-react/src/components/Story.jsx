import React from 'react'
import story from '../assets/img/Profile-Pic.png'

function Story() {
  return (
    <div>
        <ul className='flex flex-wrap text-center my-5 ml-[80px]'>
            <li className='mr-[30px] p-[10px]'>
                <img src={story} alt="img" className='w-16 md:w-16 lg:w-16 border-4 border-slate-100 rounded-full' />
                <p>Made Us</p>
            </li>
            
            <li className='mr-[30px] p-[10px]'>
                <img src={story} alt="img" className='w-16 md:w-16 lg:w-16 border-4 border-slate-100 rounded-full' />
                <p>Made Us</p>
            </li>

            <li className='mr-[30px] p-[10px]'>
                <img src={story} alt="img" className='w-16 md:w-16 lg:w-16 border-4 border-slate-100 rounded-full' />
                <p>Made Us</p>
            </li>

            <li className='mr-[30px] p-[10px]'>
                <img src={story} alt="img" className='w-16 md:w-16 lg:w-16 border-4 border-slate-100 rounded-full' />
                <p>Made Us</p>
            </li>
        </ul>
    </div>
  )
}

export default Story