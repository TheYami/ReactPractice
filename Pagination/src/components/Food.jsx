import React from 'react'

function Food({name,image_url}) {
  return (
    <div className="card">
        <div className="card-body">
            <div className="card-img">
                <img src={image_url} alt={name} />
            </div>
        </div>

        <div className='card-title'>
            <h2>{name}</h2>
        </div>
    </div>
  )
}

export default Food