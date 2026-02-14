import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cardSlice";

const IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const Card = () => {
  const cardItems = useSelector((store) => store.card.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem({ id: itemId }));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">
        Cart ({cardItems.length})
      </h1>

      {cardItems.length === 0 && <p>Cart is empty</p>}

      {cardItems.length > 0 && (
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white px-4 py-2 mb-4 rounded hover:bg-red-600"
        >
          Clear Cart
        </button>
      )}

      {/* 🔥 THIS WAS MISSING */}
      {cardItems.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-start py-4 border-b"
        >
          {/* Left: Item info */}
          <div className="w-8/12">
            <p className="font-semibold text-lg">{item.name}</p>

            <p className="text-gray-600 text-sm mt-1">
              {item.description}
            </p>

            <p className="text-yellow-600 text-sm mt-1">
              ⭐ {item.rating}
            </p>

            <p className="font-semibold mt-1">
              ₹{(item.price || item.defaultPrice) / 100}
            </p>

            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-red-600 text-sm mt-2 hover:underline"
            >
              Remove
            </button>
          </div>

          {/* Right: Item image */}
          {item.imageId && (
            <div className="w-28 h-28">
              <img
                src={IMAGE_BASE_URL + item.imageId}
                alt={item.name}
                className="w-28 h-28 object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;
