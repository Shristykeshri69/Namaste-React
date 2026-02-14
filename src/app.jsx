

import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import UserContext from "./components/UserContext";

import Header from "./components/Header";
import Body from "./components/Body";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import Grocery from "./components/Grocery";

import Card from "./components/card";

import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import {Provider} from 'react-redux';
import appstore from "./utils/appstore";



const AppLayout = () => {
  const [userName,setUserName]=useState();
  // Authentication 
  useEffect(()=>

    // Make an API call and send username and password
  {const data={
    name:"Shristy Keshri",
  };
  setUserName(data.name);

  },[]);
  
  return (
    <Provider store={appstore}>
    <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Body /> },
        { path: "about", element: <About /> },
        { path: "contact", element: <Contact /> },
        { path: "grocery", element: <Grocery /> },
      

          {path:"card",element:<Card/>},
        { path: "restaurant/:resId", element: <RestaurantMenu /> },
          
      ],
    },
  ],
  
);


const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);


// root.render(<AppLayout />);
