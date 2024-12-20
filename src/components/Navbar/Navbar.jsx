
import './styles.css';
import { Link } from "react-router";
import { useSelector } from 'react-redux';
const Navbar = () => {
  const cartItems = useSelector(state => state.products.cartItems)
  return (
    <nav>
        <img src=''/>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><Link to="/projects">My Projects</Link></li>
            <li><Link to="/cart">Cart {cartItems}</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar