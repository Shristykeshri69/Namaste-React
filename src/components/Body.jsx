import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantCard,{PromotedLabel} from "./RestaurantCard";
import React from "react";



import Shimmer from "./Shimmer"; 
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{
const  [ListOfRestaurants,setListOfRestaurants]=useState([])
const [filteredRestaurants,setFilteredRestaurants]=useState([])
const [searchText,setSearchText]=useState("")

const RestaurantCardPromoted=PromotedLabel(RestaurantCard);

console.log("body rendered");

useEffect(()=>{
  fetchData();
},[]);




const fetchData = async () => {
  
    // const PROXY_URL = "https://api.allorigins.win/raw?url=";
    const SWIGGY_URL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6289486&lng=88.4351299&page_type=DESKTOP_WEB_LISTING";

    const data = await fetch(SWIGGY_URL);
    const json = await data.json();

    console.log(json);

    // ✅ Find the card that contains restaurants
    const restaurantCard = json?.data?.cards?.find(
      (card) =>
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    // ✅ Extract restaurants safely
    const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

    console.log("Restaurants:", restaurants);

    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }; 




const onlineStatus=useOnlineStatus();
if (onlineStatus===false)
  return (
<h1>
  Looks like you're offline !!!! Please check your internet Connection;
</h1>)




return ListOfRestaurants.length === 0 ? (
  <Shimmer />
) : (
  <div className="body ">
    <div className="filter flex">
      <div className="search m-4 p-4">
        <input type="text" className="border-solid border-black" value={searchText} 
        onChange={(e)=>{
          setSearchText(e.target.value);
        }}
        />
        <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
          // Filter the restaurant cards  and update the UI
          // search Text
          // console.log(searchText);

          const filteredRestaurants=ListOfRestaurants.filter((res)=>
          res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          setListOfRestaurants(filteredRestaurants)



        }}>Search</button>
      </div>
   
    <div className="search m-4 p-4 flex items-center">
       <button
        className="px-4 py-2 bg-gray-100 "
        onClick={() => {
          const filteredRestaurants = ListOfRestaurants.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurants(filteredRestaurants);
        }}
      >
        Top Rated restaurant
      </button>
    </div>
     
    </div>

  

<div className="flex flex-wrap">
  {filteredRestaurants.map((restaurant) => (
    <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
     <RestaurantCard resData={restaurant} />
    </Link>
  ))}
</div>






  </div>
);
}
export default Body;


