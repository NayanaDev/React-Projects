import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Profile from './pages/Profile.jsx';
import Projects from './pages/Projects.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Todo from './pages/todo.jsx';
import Products from './pages/products/Products.jsx';
import { store } from './redux/store.js';
import { Provider } from 'react-redux'
import Cart from './pages/products/Cart.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
      <Routes>
      
        <Route path="/" element={ <App /> } />
        <Route path="/profile" element={ <Profile /> } />
        {/* <Route path="projects" element={ <Projects /> } >
          <Route path="todo-app" element={ <Todo /> } />
          <Route path="products" element={ <Products /> } />
        </Route> */}
         <Route path="/projects" element={ <Projects /> } />
        <Route path="/projects/todo-app" element={ <Todo /> } />
        <Route path="/projects/products" element={ <Products /> } />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </Provider>
  </StrictMode>,
)
