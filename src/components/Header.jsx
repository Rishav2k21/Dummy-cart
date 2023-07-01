import React from 'react'
import {FiShoppingBag} from "react-icons/fi"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
const Header = () => {
const {cartItems}=useSelector((state)=>state.cart);
  return (
    <nav>
        <h2>
            logo
        </h2>
        <div>
            <Link to={"/"}>home</Link>
            <Link to={"/cart"}>
            <FiShoppingBag/>
            <p>{cartItems.length}</p>
         </Link>
        </div>
    </nav>
  )
}

export default Header
