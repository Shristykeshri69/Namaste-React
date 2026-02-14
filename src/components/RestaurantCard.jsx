
import { CDN_URL } from "../utils/constants";
import React from "react";


const RestaurantCard=(props)=>{
  const {resData}=props;

const {
 cloudinaryImageId,

  name,
  cuisines,
  avgRating,
  costForTwo,
  sla,
} = resData.info ;

const { deliveryTime } = sla || {};




  // console.log(props)
  return (
    <div className="m-4 p-4 w-[300] h-135 rounded-lg bg-gray-100 hover:bg-gray-200 flex flex-col"  >
      <img className="rounded-lg"
      alt="res-logo"
      src={CDN_URL + cloudinaryImageId}/>
      <h3 className="font-bold px-4 py-4 text-lg">{name}</h3>
     <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4> 
       <h4>{costForTwo}</h4>
       <h4>{deliveryTime+" min"}</h4>

    </div>
  )
};

// Higher Order Component
// input - RestaurantCard   ==>  output - RestaurantCardWithPromotedLabel

// export const PromotedLabel=(RestaurantCard)=>{
//   return (props)=>{
//     <div>

//       <label className="bg-black text-white absolute m-2 p-1 rounded-md text-sm">PROMOTED</label>
//       <RestaurantCard {...props}/>
//     </div>
//   }
// }



export const PromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <RestaurantCard {...props} />
        <label className="bg-black text-white absolute top-2 left-2 p-1 rounded text-sm z-10">
          PROMOTED
        </label>
      </div>
    );
  };
};



export default RestaurantCard
