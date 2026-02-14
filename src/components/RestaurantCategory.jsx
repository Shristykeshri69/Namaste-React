import { info } from "react-router";
import React from "react";

const RestaurantCategory=({info})=>{
    return (
        <div>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4">
          <span>{info.title}</span>
          <span>⬇️</span>
        </div>
    
        </div>
    );
       
};
export default RestaurantCategory;