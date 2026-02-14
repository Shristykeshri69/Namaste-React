import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import mockMenu from "../utils/mockMenu";
import React from "react";
import { useDispatch } from "react-redux";
import {addItem} from '../utils/cardSlice';

const IMAGE_BASE_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  
  const dispatch = useDispatch();
  const handleAddItem=(item)=>{
    // dispatch an action to add item to cart
    
    dispatch(addItem(item.card.info));
    
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setResInfo(mockMenu[resId]);
    }, 500);

    return () => clearTimeout(timer);
  }, [resId]);

  if (!resInfo) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards?.[0]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <>
      {/* Restaurant Info */}
      <div className="m-4 p-4 text-xl flex items-center justify-center h-40 flex-col border">
        <h1 className="font-bold">{name}</h1>
        <p>
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
      </div>

      {/* Categories */}
      {categories.map((category, index) => {
        const { title, itemCards } = category.card.card;

        return (
          <div
            key={title}
            className="m-4 p-4 w-6/12 mx-auto border shadow-lg rounded"
          >
            {/* Header */}
            <div
              className="flex justify-between items-center cursor-pointer font-bold text-xl shadow-md p-3"
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            >
              <h2>
                {title} ({itemCards.length}{itemCards.length > 1 ? " items" : " item"})
              </h2>
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </div>

            {/* Items */}
            {openIndex === index && (
              <div className="mt-4">
                {itemCards.map((item) => {
                  const {
                    id,
                    name,
                    description,
                    price,
                    ratings,
                    imageId,
                  } = item.card.info;

                  const rating =
                    ratings?.aggregatedRating?.rating || "N/A";
                  const ratingCount =
                    ratings?.aggregatedRating?.ratingCount || "";

                  return (
                    <div
                      key={id}
                      className="flex justify-between items-start py-4 border-b"
                    >
                      {/* Left */}
                      <div className="w-8/12">
                        <p className="font-semibold">{name}</p>
                        <p className="text-sm text-gray-500">
                          {description}
                        </p>
                        <p className="text-sm text-yellow-600 mt-1">
                          ⭐ {rating} {ratingCount && `(${ratingCount})`}
                        </p>
                        <p className="font-semibold mt-1">
                          ₹{price / 100}
                        </p>
                      </div>

                      {/* Right */}

                    <div className="relative w-28 h-28">
                          {imageId && (
                           <img
                                      src={IMAGE_BASE_URL + imageId}
                                      alt={name}
                                      className="w-28 h-28 object-cover rounded-lg"
                                    />
                            )}
                                  
                                  {/* Mini add button */}
                            <button
                            className="absolute bottom-1 right-1 bg-black text-white w-13 h-9  flex items-center justify-center text-xs hover:bg-gray-800"
                            onClick={() => handleAddItem(item)}> ADD +</button>
                       </div>

                      
                      
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default RestaurantMenu;
