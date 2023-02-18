import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/slices/cartSlice";
import CartCards from "./CartCards";

// Cart renders a card for each item in the cart
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  //clearing cart all items dispatching an action from store "clear cart"
  const handleClearCart = () => {
    dispatch(clearCart());
  };
 // Render the cart cards, or show a message to the user if there are no items in the cart
  return (
    <>
      {cartItems.length >0 ? (
        <div className="flex bg-purple-50 h-full w-full flex-wrap justify-center">
          <div className="h-14 bg-purple-300 w-full">
            <button
              className="bg-yellow-300 w-32 h-10 m-2 text-whites rounded-md font-semibold"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </div>
          {cartItems.map((item) => (
            <CartCards {...item} key={item.id} />
          ))}
        </div>
      ) : (
        <div className="flex bg-purple-50 h-72 w-full flex-wrap justify-center">
          <h1 className="font-extrabold text-6xl mt-10 text-purple-800">No Items in cart</h1>
        </div>
      )}
    </>
  );
};

export default Cart;
