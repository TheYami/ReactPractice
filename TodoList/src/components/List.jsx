import React from 'react'

function List(props) {
    const {id,title,removeItem,editItem} = props
  return (
    <div className='list-item'>
        <p className="title">{title}</p>
        <div className="button-container">
            <button onClick={()=>editItem(id)}>Edit</button>
            <button onClick={()=>removeItem(id)}>Delete</button>
        </div>
    </div>
  )
}

export default List