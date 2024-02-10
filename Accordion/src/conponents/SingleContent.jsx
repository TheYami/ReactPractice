import React from 'react'
import { useState } from 'react'

function SingleContent({title,description}) {
    const [show,setShow] = useState(false)
  return (
    <div className='content'>
        <header>
            <h4>{title}</h4>
            <button onClick={()=>setShow(!show)}>เพิ่มเติม</button>
        </header>
        {show && <p>{description}</p>}
    </div>
  )
}

export default SingleContent