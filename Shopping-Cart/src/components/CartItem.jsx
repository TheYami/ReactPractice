import React from 'react'
import { MyCartContext } from '../Management/Context'
import minus from '../assets/img/minus.svg'
import plus from '../assets/img/plus.svg'
import deletebtn from '../assets/img/delete-icn.svg'

function CartItem({id,name,image_url,price,quantity}) {
    const {removeItem,toggleQuantity,formatNumber} = MyCartContext()
  return (
    <div className='item'>
        <div className="product-image">
            <img src={image_url} alt={name} />
        </div>
        <div className="description">
            <span>{name}</span>
            <span>ราคา {formatNumber(price)} บาท</span>
        </div>
        <div className="quantity">
            <button className='plus-btn' onClick={()=>toggleQuantity(id,'increment')}><img src={plus} alt="" /></button>
            <input type="text" value={quantity} disabled/>
            <button className='minus-btn' onClick={()=>toggleQuantity(id,'decrement')}><img src={minus} alt="" /></button>
        </div>
        <div className="total-price">
            {formatNumber(quantity * price)}
        </div>
        <div className="remove" onClick={()=>{removeItem(id)}}>
            <img src={deletebtn} alt="" />
        </div>
    </div>
  )
}

export default CartItem