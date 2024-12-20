import React from 'react'
import { useSelector } from 'react-redux'
function Cart() {
  const {cart} = useSelector(state => state.products);
  console.log("cart", cart);
  return (
    <div>
        Cart
        <ul>
        {
            cart && cart.map(cart => 
                <li key={cart.id}>{cart.title} - {cart.price} - {cart.quantity}</li>
            )
        }
        </ul>
    </div>
    
  )
}

export default Cart