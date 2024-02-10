import CartItem from './CartItem'
import { MyCartContext } from '../Management/Context'

function Cart() {

    const {cart,total,formatNumber} = MyCartContext()

  if(cart.length===0){
    return(
      <div className="shopping-cart">
        <h1>ไม่มีสินค้าในตะกร้า</h1>
      </div>
    )
  }else{
    return (
      <div className='shopping-cart'>
          <div className="title">สินค้าในตระกร้า</div>
          {cart.map((data)=>{
              return <CartItem key={data.id} {...data}/>
          })}
          <div className="footer">ยอดรวม {formatNumber(total)} บาท</div>
      </div>
    )
  }
}

export default Cart