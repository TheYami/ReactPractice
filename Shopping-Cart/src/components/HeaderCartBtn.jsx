import React from 'react'
import { MyCartContext } from '../Management/Context'


function HeaderCartBtn() {
  const {amount,formatNumber} = MyCartContext()
  return (
    <button className='button'>
        <span>ตะกร้าสินค้า</span>
        <span className='badge'>{formatNumber(amount)}</span>
    </button>
  )
}

export default HeaderCartBtn