import React from 'react'
import './styles.css';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../redux/slices/ProductSlice';
import loader from "../../assets/images/loader.png";
function Product({product}) {
 const {title, images, price} = product;
 const dispatch = useDispatch();
 const addItem = (product) => {
    let productModified = {...product, quantity: product?.quantity ? product?.quantity + 1 : 1}
    console.log("mod ",productModified);
    dispatch(addItemToCart(productModified))
 }
  return (
    <li>
        <img src={images[0] && images[0]} />
        {/* <img src={loader} /> */}
        <h4>{title}</h4>
        <h6>{price}</h6>
        <button onClick={() => addItem(product)}>Add to cart</button>
    </li>
  )
}

export default Product