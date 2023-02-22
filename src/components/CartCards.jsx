import React from "react";
import { useDispatch} from "react-redux";
import { IMG_CDN_URL } from "../config";
import { increaseQuantity, removeOneItem } from "../store/slices/cartSlice";
// import { IMG_CDN_URL } from '../config'

//cloudinaryImageId, name, price, id 
// CartCards renders a card for each item in the cart, with a Remove button to delete it from the cart
const CartCards = ({ card}) => {
    const dispatch = useDispatch(); // create a dispatch variable from react-redux

  // Handle removing item from cart using dispatch & removeOneItem from cartSlice
 const handleRemoveItem =(id)=>{
  console.log(id)
    dispatch(removeOneItem(id)) 
    }
 

    const {cloudinaryImageId , name ,price , id} = card;

  return (
    <div className="bg-purple-100 w-2/5 m-5  flex rounded-md shadow-md">
      <div className="rounded-md">
        {
            !cloudinaryImageId ? <img className="rounded-t-md h-full w-56" src="https://www.evemilano.com/wp-content/uploads/2011/04/not-found1-410x256.png" alt="" />:   <img
            className="rounded-t-md h-full w-56"
            src={IMG_CDN_URL + cloudinaryImageId}
            alt=""
          />
        }
      
      </div>
      <div className="ml-14">
        <h3 className="font-extrabold mt-10 mb-5">{name}🌟</h3>
        <h3 className="font-bold">Price : {price} PKR</h3>
        <h3 className="font-bold">ID : {id}</h3>
        <button className="bg-red-600 w-32 h-10 text-white mt-5 rounded-md font-semibold mb-4" onClick={()=>handleRemoveItem(id)}>Remove Item</button>
        <div>
          <div className="m-5">
          <label for="quantity">Quantity:</label>

          <select name="quantity" id="Quantity">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8</option>
  <option value="9">9</option>
  <option value="10">10</option>
  
</select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCards;
