import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import './styles.css';
function Cart() {
  const {cart} = useSelector(state => state.products);
  console.log("cart", cart);
  const totalCart = useMemo(() => {
        return cart.reduce((accumulator, item) => {
            console.log("ac",accumulator);
            return accumulator += (item.price * item.quantity); 
        },0)
  },)
  if(!cart.length) return <h3>No products added yet.</h3>; 
  return (
    <div className='cart'>
        Cart
        <ul>
        <li className = "cartProduct" key={cart.id}>
            <h6>Product Image</h6>
            <h6>Product Name</h6>
            <h6>Product Price</h6>
            <h6>Product Quantity</h6>
            <h6>Total</h6>
        </li> 
        {
            
            cart && cart.map(cart => 
                <li className = "cartProduct" key={cart.id}> 
                <img src={cart.images[0] && cart.images[0]} /> 
                <h5>{cart.title}</h5> 
                <h5>{cart.price} </h5>
                <h5>{cart.quantity}</h5>
                <h5>{cart.quantity * cart.price}</h5>
                </li>
            )
        }
        <li>
            <h5>Total cart price: {Math.round(totalCart) }</h5>
        </li>
        </ul>
    </div>
    
  )
}

export default Cart