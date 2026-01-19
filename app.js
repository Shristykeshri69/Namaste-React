
// const heading = React.createElement(
//     "h1",
//     {id:"heading",xyz:"abc" },
//     "Hello world from React!!!")

/* import React from "react";
import ReactDOM from "react-dom/client";

const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div", {id:"child"},
        [React.createElement("h1",{},"I'm an h1 tag"),
          React.createElement("h2",{},"I'm an anthony"),  
        ]),

          React.createElement("div", {id:"child2"},
        [React.createElement("h1",{},"I'm an h1 tag"),
          React.createElement("h2",{},"I'm an h2 tag"),  
        ]),
    ])
console.log(parent)   //object*/



import ReactDOM from "react-dom/client";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.KsXSyBhwBCsBVC9vTWa7nQHaFj?w=259&h=194&c=7&r=0&o=7&pid=1.7&rm=3"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard=(props)=>{
  const {resData}=props;

const {
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  costForTwo,
  sla,
} = resData?.card?.card?.info ;

const { deliveryTime } = sla || {};




  console.log(props)
  return (
    <div className="res-card" style={{backgroundColor:"#f0f0f0"}} >
      <img className="res-logo"
      alt="res-logo"
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
      <h3>{name}</h3>
     <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating}</h4> 
       <h4>{costForTwo}</h4>
       <h4>{deliveryTime+" min"}</h4>

    </div>
  )
}

const resList=[
  {"card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1007285",
              "name": "Big Bowl",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/12/eb9024f3-4373-4cd4-8a30-0d51b85ab66a_1007285.jpg",
              "locality": "New Town Rajarhat",
              "areaName": "Chinar Park",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Chinese",
                "Tibetan",
                "North-Indian"
                
              ],
              "avgRating": 4.3,
              "parentId": "434792",
              "avgRatingString": "4.3",
              "totalRatingsString": "770",
              "promoted": true,
              "adTrackingId": "cid=f2de5d9c-2828-4612-b236-b036d2522f46~p=0~adgrpid=f2de5d9c-2828-4612-b236-b036d2522f46#ag8~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1007285~plpr=COLLECTION~eid=30fd1e19-e660-4c04-b9bd-7466eda7ca70~srvts=1768763577928~collid=83649",
              "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-19 01:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "f2de5d9c-2828-4612-b236-b036d2522f46"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1007285&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }

    },
    {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "7690",
              "name": "Aminia",
              "cloudinaryImageId": "kcew9m5qdv7vfuurvxyx",
              "locality": "Rajarhat",
              "areaName": "Rajarhat",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Biryani",
                "Mughlai",
                "Chinese",
                "Tibetan",
                "North-Indian"
                
              ],
              "avgRating": 4.6,
              "parentId": "3786",
              "avgRatingString": "4.6",
              "totalRatingsString": "118K+",
              "promoted": true,
              "adTrackingId": "cid=86e44513-2d85-4d6f-ac90-048b2a97d973~p=1~adgrpid=86e44513-2d85-4d6f-ac90-048b2a97d973#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=7690~plpr=COLLECTION~eid=1a7636fb-32a1-45f9-bdff-2dbd1c1381bb~srvts=1768763577928~collid=83649",
              "sla": {
                "deliveryTime": 22,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-19 01:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "aggregatedDiscountInfoV2": {
                
              },
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.2",
                  "ratingCount": "13K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "86e44513-2d85-4d6f-ac90-048b2a97d973"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=7690&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
      {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "169019",
              "name": "Behrouz Biryani",
              "cloudinaryImageId": "a4ffed13eb197c6df43dfe1c756560e5",
              "locality": "P S newtown",
              "areaName": "Rajarhat",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Chinese",
                "Tibetan",
                "North-Indian",
                "Mughlai",
                "Beverages",
                "Desserts"
              ],
              "avgRating": 4.1,
              "parentId": "1803",
              "avgRatingString": "4.1",
              "totalRatingsString": "6.5K+",
              "promoted": true,
              "adTrackingId": "cid=a7c1fdba-e409-4430-b3cf-ed549298e020~p=2~adgrpid=a7c1fdba-e409-4430-b3cf-ed549298e020#ag7~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=169019~plpr=COLLECTION~eid=7c65295d-a927-4eb5-be11-470f8f8a493c~srvts=1768763577928~collid=83649",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-19 03:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {
                    
                  },
                  "textBased": {
                    
                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "imageId": "newg.png",
                          "description": "Gourmet"
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹60",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "a7c1fdba-e409-4430-b3cf-ed549298e020"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=169019&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
       {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "191615",
              "name": "The Biryani Life",
              "cloudinaryImageId": "gzm5goobmq9wka0e6kw3",
              "locality": "P S newtown",
              "areaName": "Rajarhat",
              "costForTwo": "₹250 for two",
              "cuisines": [
                
                "Kebabs",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 4.1,
              "parentId": "8496",
              "avgRatingString": "4.1",
              "totalRatingsString": "1.0K+",
              "promoted": true,
              "adTrackingId": "cid=41d1941f-3691-4e93-a48f-19adb6b93d97~p=4~adgrpid=41d1941f-3691-4e93-a48f-19adb6b93d97#ag7~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=191615~plpr=COLLECTION~eid=e599a884-db1b-4130-a489-00e4334dab78~srvts=1768763577928~collid=83649",
              "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-19 03:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹79",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "41d1941f-3691-4e93-a48f-19adb6b93d97"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=191615&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
       {
        "card": {
          "card": {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1030853",
              "name": "Thalaiva Biryani",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/7/2/8bf3bbe1-bccf-4067-9340-4ef0ce3caf28_4928d658-b637-4deb-8c57-b975167aaf4e.jpeg",
              "locality": "P S newtown",
              "areaName": "Rajarhat",
              "costForTwo": "₹400 for two",
              "cuisines": [
                
                "Kebabs",
                "Desserts",
                "Beverages"
              ],
              "avgRating": 3.9,
              "parentId": "582792",
              "avgRatingString": "3.9",
              "totalRatingsString": "181",
              "promoted": true,
              "adTrackingId": "cid=79963f26-43fc-4d1e-a134-b4ba81eb72f3~p=8~adgrpid=79963f26-43fc-4d1e-a134-b4ba81eb72f3#ag14~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1030853~plpr=COLLECTION~eid=3044adc8-8997-4d8c-8adf-5b6e0c499197~srvts=1768763577928~collid=83649",
              "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-01-19 03:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {
                    
                  },
                  "imageBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹89",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                },
                "commsStyling": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "79963f26-43fc-4d1e-a134-b4ba81eb72f3"
            },
            "analytics": {
              
            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1030853&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
          },
          "relevance": {
            "type": "RELEVANCE_TYPE_ON_MENU_RETURN",
            "sectionId": "MENU_RETURN_FOOD"
          }
        }
      },
  ]



const Body=()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]}/>
        <RestaurantCard resData={resList[1]}/>
        <RestaurantCard resData={resList[2]}/>
        <RestaurantCard resData={resList[3]}/>
        <RestaurantCard resData={resList[4]}/> */}

    {resList.map((restaurant) => (
  <RestaurantCard
    key={restaurant.card.card.info.id}
    resData={restaurant}
  />
))}


        
      
           

       </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
