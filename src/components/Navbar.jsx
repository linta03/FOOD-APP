import React from "react";
import { LOGO_URL } from "../config";
// import "../main.css"
import { Link } from "react-router-dom";
import useNetworkStatus from "../hooks/useNetworkStatus";
import { useSelector } from "react-redux";


const Navbar =()=>{
  const cartItems = useSelector(store=>store.cart.items);
    const online = useNetworkStatus();
  return(
    <>
   <nav className="flex bg-purple-200">
    <div className="w-20 h-5">
      <img src={LOGO_URL} alt="" data-testid="logo"/>
    </div>
    <div className="flex justify-end w-auto text-md">
      <ul className="flex m-4 mx-36 font-semibold">
        <p className="mx-8" data-testid="online_status">{!online? "Offline🥲🔴":"Online😄🟢"}</p>
        <li className="mx-6"> <Link to="/">Home</Link> </li>
        <li className="mx-6"><Link to="/about">About</Link></li>
        <li className="mx-6"><Link to="/contact"> Contact</Link></li>
        <li className="mx-6"><Link to="/cart"> Cart <span className="bg-purple-900 text-white rounded-tl-lg w-6" data-testid="cart-length">{cartItems.length}</span></Link></li>
        <li className="mx-6 "><Link to="/mart"> Mart</Link></li>
      </ul>
    </div>
   </nav>
    </>
  )

}
export default Navbar;