import React from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./header.css";
import logo from "../component/pizza.png";
const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 bor border-2 ">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#"><img alt="logo" className="logo" src={logo}></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link  t-color" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link t-color" to="/product">Products</Link>
        </li>
      
      
      </ul>
      <div className="d-flex ">
     <ul className="shoppingcart navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
            <Link className="shoppingcartlink" to="/cart"><ShoppingCartIcon></ShoppingCartIcon><sup><b>2</b></sup></Link>
        </li>
     </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header;
