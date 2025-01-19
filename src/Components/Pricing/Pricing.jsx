import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import {
  incrementQuantity,
  decrementQuantity,
} from "../../features/productSlice";

function Pricing() {
  const cart = useSelector((state) => state.product.cart);
  const totalPrice = useSelector((state) => state.product.totalPrice);
  const dispatch = useDispatch();
  const location = useLocation();

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  return (
    <div>
      <h2 className="font-bold text-xl py-5 pl-2">Cart</h2>
      {cart.map((item) => (
        <div
          key={item.id}
          className="cart-item flex items-center justify-around"
        >
          <img className="w-16 h-16" src={item.img} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>₹ {item.price}</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-amber-300 px-1 rounded-lg"
              onClick={() => handleIncrement(item.id)}
            >
              +
            </button>
            <p>{item.quantity}</p>
            <button
              className="bg-amber-300 px-1.5 rounded-lg"
              onClick={() => handleDecrement(item.id)}
            >
              -
            </button>
          </div>
        </div>
      ))}
      <p className="text-center font-bold text-xl">Total: ₹ {totalPrice}</p>
      <div className="w-max m-auto">
        {location.pathname === "/payment" ? (
          <Link to="/" className="bg-amber-300 rounded-full p-2 mt-5 text-xs">
            Go Back to Cart
          </Link>
        ) : (
          <Link
            to="/payment"
            className="bg-amber-300 rounded-full p-2 mt-5 text-xs"
          >
            Proceed to Payment
          </Link>
        )}
      </div>
    </div>
  );
}

export default Pricing;
