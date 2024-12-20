import axios from "axios"
import { useEffect, useState } from "react"
import Product from "./Product";
import { BASE_URL, PRODUCTS } from "../../config/Urls";
function Products() {
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const limit = 4;
  useEffect(() =>{
    axios.get(`${BASE_URL+PRODUCTS.FETCH_PRODUCTS}?limit=${limit}&skip=${skip}`).then(function(response){
        console.log("res",response);
        console.log("data",response.data.products);
        setProducts([...products, ...response.data.products]);
        console.log("products", products)
    }).catch(function(error){
      console.log("error",error);
    })
  },[skip]);
  const LoadMoreData = () => {
    setSkip(prev => prev + 4);
  }
  return (
    <div>Products
      <ul className="products">
      {
        products && products.map((prod) => <Product key={prod.id} product= {prod} />)
      }
      </ul>
      <button onClick={LoadMoreData}>Load More</button>
    </div>
  )
}

export default Products