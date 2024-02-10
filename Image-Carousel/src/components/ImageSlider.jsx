import React, { useState } from 'react'
import ImageData from './ImageData'
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";

function ImageSlider() {
    const [current,setCurrent] = useState(0)
    const lenght = ImageData.length

    const prevSlide = ()=>{
        current === 0? setCurrent(lenght-1):setCurrent(current-1)
    }

    const nextSlide = ()=>{
        current === lenght-1?setCurrent(0):setCurrent(current+1)
    }
  return (
    <section className='slider'>
        <FaAngleLeft className='left' onClick={prevSlide}/>
        <FaAngleRight className='right' onClick={nextSlide}/>
        {ImageData.map((data,index)=>{
            return (
                <div className={index === current? 'slide active' : 'slide'} key={index}>
                   {index === current && (
                     <div>
                        <img src={data.img} alt={data.title} className='image'/>
                     <p>{data.title}</p>
                 </div>
                   )}
                </div>
            )
        })}
    </section>
  )
}

export default ImageSlider