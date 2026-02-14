

// import React from "react";
// const mockMenu = {
//   "573520": { // La Pino'z Pizza
//     cards: [
//       {
//         card: {
//           card: {
//             info: {
//               id: "573520",
//               name: "La Pino'z Pizza",
//               cuisines: ["Pizzas", "Italian", "Fast Food"],
//               costForTwoMessage: "₹400 for two",
//             },
//           },
//         },
//       },
//       {},
//       {
//         groupedCard: {
//           cardGroupMap: {
//             REGULAR: {
//               cards: [
//                 {},
//                 {
//                   card: {
//                     card: {
//                       itemCards: [
//                         { card: { info: { id: "573520-1", name: "Cheese Burst Margherita", price: 24900 } } },
//                         { card: { info: { id: "573520-2", name: "Farm Villa Pizza", price: 32900 } } },
//                         { card: { info: { id: "573520-3", name: "Mexican Green Wave Pizza", price: 35900 } } },
//                         { card: { info: { id: "573520-4", name: "Paneer Tikka Pizza", price: 39900 } } },
//                         { card: { info: { id: "573520-5", name: "Garlic Breadsticks", price: 14900 } } },
//                       ],
//                     },
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       },
//     ],
//   },

//   "25457": { // Domino's Pizza
//     cards: [
//       {
//         card: {
//           card: {
//             info: {
//               id: "25457",
//               name: "Domino's Pizza",
//               cuisines: ["Pizzas", "Fast Food", "Italian"],
//               costForTwoMessage: "₹450 for two",
//             },
//           },
//         },
//       },
//       {},
//       {
//         groupedCard: {
//           cardGroupMap: {
//             REGULAR: {
//               cards: [
//                 {},
//                 {
//                   card: {
//                     card: {
//                       itemCards: [
//                         { card: { info: { id: "25457-1", name: "Pepper Barbecue Chicken", price: 29900 } } },
//                         { card: { info: { id: "25457-2", name: "Veg Extravaganza", price: 34900 } } },
//                         { card: { info: { id: "25457-3", name: "Paneer Makhani Pizza", price: 31900 } } },
//                         { card: { info: { id: "25457-4", name: "Cheesy Garlic Bread", price: 12900 } } },
//                         { card: { info: { id: "25457-5", name: "Choco Lava Cake", price: 14900 } } },
//                       ],
//                     },
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       },
//     ],
//   },

//   "579705": { // Burger King
//     cards: [
//       {
//         card: {
//           card: {
//             info: {
//               id: "579705",
//               name: "Burger King",
//               cuisines: ["Burgers", "Fast Food", "American"],
//               costForTwoMessage: "₹350 for two",
//             },
//           },
//         },
//       },
//       {},
//       {
//         groupedCard: {
//           cardGroupMap: {
//             REGULAR: {
//               cards: [
//                 {},
//                 {
//                   card: {
//                     card: {
//                       itemCards: [
//                         { card: { info: { id: "579705-1", name: "Whopper", price: 29900 } } },
//                         { card: { info: { id: "579705-2", name: "Chicken Royale", price: 24900 } } },
//                         { card: { info: { id: "579705-3", name: "Veggie Burger", price: 19900 } } },
//                         { card: { info: { id: "579705-4", name: "French Fries", price: 99 } } },
//                         { card: { info: { id: "579705-5", name: "Coke", price: 49 } } },
//                       ],
//                     },
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       },
//     ],
//   },

//   "729184": { // KFC
//     cards: [
//       {
//         card: {
//           card: {
//             info: {
//               id: "729184",
//               name: "KFC",
//               cuisines: ["Fast Food", "Burgers", "Chicken"],
//               costForTwoMessage: "₹400 for two",
//             },
//           },
//         },
//       },
//       {},
//       {
//         groupedCard: {
//           cardGroupMap: {
//             REGULAR: {
//               cards: [
//                 {},
//                 {
//                   card: {
//                     card: {
//                       itemCards: [
//                         { card: { info: { id: "729184-1", name: "Chicken Bucket", price: 49900 } } },
//                         { card: { info: { id: "729184-2", name: "Zinger Burger", price: 24900 } } },
//                         { card: { info: { id: "729184-3", name: "Popcorn Chicken", price: 19900 } } },
//                         { card: { info: { id: "729184-4", name: "Veg Burger", price: 14900 } } },
//                         { card: { info: { id: "729184-5", name: "Pepsi", price: 49 } } },
//                       ],
//                     },
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       },
//     ],
//   },

//   "396435": { // Pizza Hut
//     cards: [
//       {
//         card: {
//           card: {
//             info: {
//               id: "396435",
//               name: "Pizza Hut",
//               cuisines: ["Pizzas", "Italian", "Fast Food"],
//               costForTwoMessage: "₹500 for two",
//             },
//           },
//         },
//       },
//       {},
//       {
//         groupedCard: {
//           cardGroupMap: {
//             REGULAR: {
//               cards: [
//                 {},
//                 {
//                   card: {
//                     card: {
//                       itemCards: [
//                         { card: { info: { id: "396435-1", name: "Veggie Supreme", price: 32900 } } },
//                         { card: { info: { id: "396435-2", name: "Chicken Feast", price: 37900 } } },
//                         { card: { info: { id: "396435-3", name: "Paneer Makhani Pizza", price: 34900 } } },
//                         { card: { info: { id: "396435-4", name: "Garlic Bread", price: 12900 } } },
//                         { card: { info: { id: "396435-5", name: "Coke", price: 49 } } },
//                       ],
//                     },
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       },
//     ],
//   },

//   "14154": { // Subway
//     cards: [
//       {
//         card: {
//           card: {
//             info: {
//               id: "14154",
//               name: "Subway",
//               cuisines: ["Fast Food", "Sandwiches", "Healthy"],
//               costForTwoMessage: "₹300 for two",
//             },
//           },
//         },
//       },
//       {},
//       {
//         groupedCard: {
//           cardGroupMap: {
//             REGULAR: {
//               cards: [
//                 {},
//                 {
//                   card: {
//                     card: {
//                       itemCards: [
//                         { card: { info: { id: "14154-1", name: "Veggie Delight", price: 19900 } } },
//                         { card: { info: { id: "14154-2", name: "Chicken Teriyaki", price: 24900 } } },
//                         { card: { info: { id: "14154-3", name: "Paneer Tikka Sub", price: 21900 } } },
//                         { card: { info: { id: "14154-4", name: "Cookie", price: 49 } } },
//                         { card: { info: { id: "14154-5", name: "Soft Drink", price: 39 } } },
//                       ],
//                     },
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       },
//     ],
//   },
//   "826876": { // Tea juction
//     cards: [
//       {
//         card: {
//           card: {
//             info: {
//               id: "14154",
//               name: "Tea juction",
//               cuisines: ["Fast Food", "Sandwiches", "Healthy", "Tea"],
//               costForTwoMessage: "₹30 for two",
//             },
//           },
//         },
//       },
//       {},
//       {
//         groupedCard: {
//           cardGroupMap: {
//             REGULAR: {
//               cards: [
//                 {},
//                 {
//                   card: {
//                     card: {
//                       itemCards: [
//                         { card: { info: { id: "14154-1", name: "Veggie Delight", price: 19900 } } },
//                         { card: { info: { id: "14154-2", name: "Chicken Teriyaki", price: 24900 } } },
//                         { card: { info: { id: "14154-3", name: "Paneer Tikka Sub", price: 21900 } } },
//                         { card: { info: { id: "14154-4", name: "Cookie", price: 49 } } },
//                         { card: { info: { id: "14154-5", name: "Soft Drink", price: 39 } } },
//                       ],
//                     },
//                   },
//                 },
//               ],
//             },
//           },
//         },
//       },
//     ],
//   },

//   // … continue for all other restaurants (824577, 543052, 801339, 837924, 450499, 566335, 575101, 263784, 826873, 826876, 826866, 826869, 30519, 379737)

// };

// export default mockMenu;


// helper to generate recommended section

// ================= CATEGORY CREATOR =================
const createCategory = ({ title, categoryId, items }) => ({
  card: {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
      title,
      categoryId,
      itemCards: items.map((item, i) => ({
        card: {
          "@type": "type.googleapis.com/swiggy.presentation.food.v2.Dish",
          info: {
            id: `${item.id}-${categoryId}-${i}`,
            name: item.name,
            description: item.description,
            price: item.price,
            isVeg: item.isVeg ? 1 : 0,
            inStock: 1,

            imageId: item.imageId || null,  
            ratings: {
              aggregatedRating: {
                rating: item.rating,
                ratingCount: "100+ ratings",
              },
            },
          },
        },
      })),
    },
  },
});


// ================= MOCK MENU =================
const mockMenu = {

  // ================= La Pino'z Pizza =================
  "573520": 
  {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "573520",
              name: "La Pino'z Pizza",
              cuisines: ["Pizzas", "Italian", "Fast Food"],
              costForTwoMessage: "₹400 for two",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {},

                // ⭐ Recommended
                createCategory({
                  title: "Recommended",
                  categoryId: "recommended",
                  items: [
                    {
                      id: "lp1",
                      name: "Cheese Burst Margherita",
                      price: 24900,
                      rating: "4.5",
                      isVeg: true,
                      description:
                        "Classic margherita with extra cheese burst.\nSoft and fluffy crust baked to perfection.\nA crowd favorite for cheese lovers.",
                    },
                    {
                      id: "lp2",
                      name: "Farm Villa Pizza",
                      price: 32900,
                      rating: "4.4",
                      isVeg: true,
                      description:
                        "Loaded with fresh farm vegetables.\nMozzarella cheese blended with herbs.\nPerfect balance of taste and crunch.",
                    },
                  ],
                }),

                // 🆕 Newly Launched
                createCategory({
                  title: "Newly Launched",
                  categoryId: "new",
                  items: [
                    {
                      id: "lp3",
                      name: "Mexican Green Wave",
                      price: 27900,
                      rating: "4.3",
                      isVeg: true,
                      description:
                        "Inspired by Mexican spices and flavors.\nCrunchy veggies with spicy seasoning.\nA bold and zesty new launch.",
                    },
                  ],
                }),

                // 🥬 Veg Pizzas
                createCategory({
                  title: "Veg Pizzas",
                  categoryId: "veg",
                  items: [
                    {
                      id: "lp4",
                      name: "Paneer Tikka Pizza",
                      price: 39900,
                      rating: "4.6",
                      isVeg: true,
                      description:
                        "Soft paneer cubes marinated in tikka masala.\nRich creamy texture with Indian flavors.\nBest paired with chilled beverages.",
                    },
                  ],
                }),

                // 🍗 Non-Veg Pizzas
                createCategory({
                  title: "Non-Veg Pizzas",
                  categoryId: "nonveg",
                  items: [
                    {
                      id: "lp5",
                      name: "Chicken Pepperoni Pizza",
                      price: 37900,
                      rating: "4.7",
                      isVeg: false,
                      description:
                        "Juicy chicken pepperoni slices.\n   Smoky, spicy and extremely flavorful.\n  A must-try for meat lovers.",
                    },
                  ],
                }),
              ],
            },
          },
        },
      },
    ],
  },

  // ================= Domino's =================
  "25457": {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "25457",
              name: "Domino's Pizza",
              cuisines: ["Pizzas", "Fast Food"],
              costForTwoMessage: "₹450 for two",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {},

                createCategory({
                  title: "Recommended",
                  categoryId: "recommended",
                  items: [
                    {
                      id: "d1",
                      name: "Pepper Barbecue Chicken",
                      price: 29900,
                      rating: "4.6",
                      isVeg: false,
                      description:
                        "Smoky barbecue chicken chunks.\nRich BBQ sauce layered generously.\nDomino’s classic bestseller.",
                    },
                    {
                      id: "d2",
                      name: "Veg Extravaganza",
                      price: 34900,
                      rating: "4.4",
                      isVeg: true,
                      description:
                        "Loaded with olives, onions and capsicum.\nCheesy and filling delight.\nPerfect for sharing.",
                    },
                  ],
                }),

                createCategory({
                  title: "Veg Pizzas",
                  categoryId: "veg",
                  items: [
                    {
                      id: "d3",
                      name: "Cheese n Corn",
                      price: 25900,
                      rating: "4.3",
                      isVeg: true,
                      description:
                        "Sweet corn with melted cheese.\nSimple yet satisfying flavors.\nLoved by kids and adults.",
                    },
                  ],
                }),
                 createCategory({
                  title: "Non-Veg Pizzas",
                  categoryId: "nonveg",
                  items: [
                    {
                      id: "d4",
                      name: "Chicken Pepperoni Pizza",
                      price: 37900,
                      rating: "4.7",
                      isVeg: false,
                      description:
                        "Juicy chicken pepperoni slices.\nSmoky, spicy and extremely flavorful.\nA must-try for meat lovers. ",
                    },
                  ],
                }),
                createCategory({
  title: "Drinks & Beverages",
  categoryId: "drinks",
  items: [
    {
      id: "dd1",
      name: "Pepsi (500ml)",
      price: 6000,
      rating: "4.2",
      isVeg: true,
      description:
        "Chilled and refreshing Pepsi.\nPerfect companion for pizzas.\nBest served cold.",
    },
    {
      id: "dd2",
      name: "Mirinda (500ml)",
      price: 6000,
      rating: "4.1",
      isVeg: true,
      description:
        "Fizzy orange flavored soft drink.\nSweet and tangy taste.\nKids’ favorite beverage.",
    },
    {
      id: "dd3",
      name: "Cold Coffee",
      price: 9900,
      rating: "4.4",
      isVeg: true,
      description:
        "Creamy chilled coffee.\nSmooth and refreshing taste.\nPerfect dessert drink.",
    },
  ],
                 }),

              ],
            },
          },
        },
      },
    ],
  },

  //=====================Pizza Hut ===================
"396435": {
  cards: [
    {
      card: {
        card: {
          info: {
            id: "396435",
            name: "Pizza Hut",
            cuisines: ["Pizzas", "Fast Food"],
            costForTwoMessage: "₹450 for two",
          },
        },
      },
    },
    {},
    {
      groupedCard: {
        cardGroupMap: {
          REGULAR: {
            cards: [
              {},

              createCategory({
                title: "Recommended",
                categoryId: "recommended",
                items: [
                  {
                    id: "d1",
                    name: "Pepper Barbecue Chicken",
                    price: 29900,
                    rating: "4.6",
                    isVeg: false,
                    imageId:
                      "FOOD_CATALOG/IMAGES/CMS/2026/1/5/41b56b0c-c864-4081-8c9c-ed4585cb3a5c_e725dfb8-341d-4ef3-9914-e7a2634187aa.jpg",
                    description:
                      "Smoky barbecue chicken chunks.\nRich BBQ sauce layered generously.\nDomino’s classic bestseller.",
                  },
                  {
                    id: "d2",
                    name: "Veg Extravaganza",
                    price: 34900,
                    rating: "4.4",
                    isVeg: true,
                    imageId:
                      "FOOD_CATALOG/IMAGES/CMS/2025/5/7/e4a3d9a3-9997-4b73-accc-b029abeb1cc9_83eb91d8-7d3d-4463-8e7e-9188ba95bcf7.jpg_compressed",
                    description:
                      "Loaded with olives, onions and capsicum.\nCheesy and filling delight.\nPerfect for sharing.",
                  },
                ],
              }),

              createCategory({
                title: "Veg Pizzas",
                categoryId: "veg",
                items: [
                  {
                    id: "d3",
                    name: "Cheese n Corn",
                    price: 25900,
                    rating: "4.3",
                    isVeg: true,
                    description:
                      "Sweet corn with melted cheese.\nSimple yet satisfying flavors.\nLoved by kids and adults.",
                  },
                ],
              }),

              createCategory({
                title: "Drinks & Beverages",
                categoryId: "drinks",
                items: [
                  {
                    id: "phd1",
                    name: "Sweet Lassi",
                    price: 7900,
                    rating: "4.5",
                    isVeg: true,
                    description:
                      "Traditional sweet yogurt-based drink.\nThick, creamy and refreshing.\nPerfect cooling beverage.",
                  },
                  {
                    id: "phd2",
                    name: "Pepsi (500ml)",
                    price: 6000,
                    rating: "4.3",
                    isVeg: true,
                    description:
                      "Classic fizzy cola drink.\nPairs well with cheesy pizzas.\nServed chilled.",
                  },
                  {
                    id: "phd3",
                    name: "Mountain Dew (500ml)",
                    price: 6000,
                    rating: "4.2",
                    isVeg: true,
                    description:
                      "Bold citrus flavored soft drink.\nHigh energy refreshment.\nPerfect with spicy food.",
                  },
                ],
              }),
            ],
          },
        },
      },
    },
  ],
},



  // ================= Burger King =================
  "579705": {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "579705",
              name: "Burger King",
              cuisines: ["Burgers"],
              costForTwoMessage: "₹350 for two",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {},

                createCategory({
                  title: "Recommended",
                  categoryId: "recommended",
                  items: [
                    {
                      id: "b1",
                      name: "Whopper",
                      price: 29900,
                      rating: "4.7",
                      isVeg: false,
                      description:
                        "Flame-grilled patty with fresh veggies.\nSignature BK sauces inside.\nBig on size and flavor.",
                    },
                    {
                      id: "b2",
                      name: "Chicken Royale",
                      price: 24900,
                      rating: "4.5",
                      isVeg: false,
                      description:
                        "Crispy chicken patty.\nSoft bun with creamy mayo.\nA royal treat indeed.",
                    },
                  ],
                }),

                createCategory({
                  title: "Veg Burgers",
                  categoryId: "veg",
                  items: [
                    {
                      id: "b3",
                      name: "Veg Crunchy",
                      price: 19900,
                      rating: "4.2",
                      isVeg: true,
                      description:
                        "Crunchy veg patty.\nLight, tasty and affordable.\nPerfect snack option.",
                    },
                  ],
                }),
                createCategory({
  title: "Drinks & Beverages",
  categoryId: "drinks",
  items: [
    {
      id: "bd1",
      name: "Pepsi (Medium)",
      price: 7000,
      rating: "4.3",
      isVeg: true,
      description:
        "Chilled carbonated cola.\nEnhances burger experience.\nRefreshing and fizzy.",
    },
    {
      id: "bd2",
      name: "Chocolate Thick Shake",
      price: 12900,
      rating: "4.6",
      isVeg: true,
      description:
        "Rich chocolate flavored thick shake.\nCreamy and indulgent.\nBK customer favorite.",
    },
    {
      id: "bd3",
      name: "Strawberry Shake",
      price: 11900,
      rating: "4.4",
      isVeg: true,
      description:
        "Sweet strawberry flavored milkshake.\nSmooth and refreshing.\nPerfect dessert drink.",
    },
  ],
}),

              ],
            },
          },
        },
      },
    ],
  },

   "806705": {
    cards: [
      {
        card: {
          card: {
            info: {
              id: "806705",
              name: "KFC ",
              cuisines: ["Pizzas", "Italian", "Fast Food"],
              costForTwoMessage: "₹400 for two",
            },
          },
        },
      },
      {},
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {},

                // ⭐ Recommended
                createCategory({
                  title: "Recommended",
                  categoryId: "recommended",
                  items: [
                    {
                      id: "lp1",
                      name: "Cheese Burst Margherita",
                      price: 24900,
                      rating: "4.5",
                      isVeg: true,
                      description:
                        "Classic margherita with extra cheese burst.\nSoft and fluffy crust baked to perfection.\nA crowd favorite for cheese lovers.",
                    },
                    {
                      id: "lp2",
                      name: "Farm Villa Pizza",
                      price: 32900,
                      rating: "4.4",
                      isVeg: true,
                      description:
                        "Loaded with fresh farm vegetables.\nMozzarella cheese blended with herbs.\nPerfect balance of taste and crunch.",
                    },
                  ],
                }),

                // 🆕 Newly Launched
                createCategory({
                  title: "Newly Launched",
                  categoryId: "new",
                  items: [
                    {
                      id: "lp3",
                      name: "Mexican Green Wave",
                      price: 27900,
                      rating: "4.3",
                      isVeg: true,
                      description:
                        "Inspired by Mexican spices and flavors.\nCrunchy veggies with spicy seasoning.\nA bold and zesty new launch.",
                    },
                  ],
                }),

                // 🥬 Veg Pizzas
                createCategory({
                  title: "Veg Pizzas",
                  categoryId: "veg",
                  items: [
                    {
                      id: "lp4",
                      name: "Paneer Tikka Pizza",
                      price: 39900,
                      rating: "4.6",
                      isVeg: true,
                      description:
                        "Soft paneer cubes marinated in tikka masala.\nRich creamy texture with Indian flavors.\nBest paired with chilled beverages.",
                    },
                  ],
                }),

                // 🍗 Non-Veg Pizzas
                createCategory({
                  title: "Non-Veg Pizzas",
                  categoryId: "nonveg",
                  items: [
                    {
                      id: "lp5",
                      name: "Chicken Pepperoni Pizza",
                      price: 37900,
                      rating: "4.7",
                      isVeg: false,
                      description:
                        "Juicy chicken pepperoni slices.\nSmoky, spicy and extremely flavorful.\nA must-try for meat lovers.",
                    },
                  ],
                }),
              ],
            },
          },
        },
      },
    ],
  },
  "314440": {
  cards: [
    {
      card: {
        card: {
          info: {
            id: "314440",
            name: "Natural Ice Cream",
            cuisines: ["Ice Cream", "Desserts"],
            costForTwoMessage: "₹300 for two",
          },
        },
      },
    },
    {},
    {
      groupedCard: {
        cardGroupMap: {
          REGULAR: {
            cards: [
              {},

              // ⭐ Recommended
              createCategory({
                title: "Recommended",
                categoryId: "recommended",
                items: [
                  {
                    id: "ni1",
                    name: "Tender Coconut Ice Cream",
                    price: 14900,
                    rating: "4.7",
                    isVeg: true,
                    description:
                      "Made with real tender coconut pieces.\nNo artificial flavors or preservatives.\nFresh, light and extremely refreshing.",
                  },
                  {
                    id: "ni2",
                    name: "Alphonso Mango Ice Cream",
                    price: 16900,
                    rating: "4.8",
                    isVeg: true,
                    description:
                      "Prepared using real Alphonso mangoes.\nRich, creamy and naturally sweet.\nA seasonal customer favorite.",
                  },
                ],
              }),

              // 🆕 Newly Launched
              createCategory({
                title: "Newly Launched",
                categoryId: "new",
                items: [
                  {
                    id: "ni3",
                    name: "Blueberry Cheesecake Ice Cream",
                    price: 18900,
                    rating: "4.5",
                    isVeg: true,
                    description:
                      "Creamy cheesecake flavored ice cream.\nSwirls of blueberry compote.\nA perfect dessert indulgence.",
                  },
                ],
              }),

              // 🥬 Ice Creams (Veg)
              createCategory({
                title: "Ice Creams",
                categoryId: "veg",
                items: [
                  {
                    id: "ni4",
                    name: "Roasted Almond Ice Cream",
                    price: 17900,
                    rating: "4.6",
                    isVeg: true,
                    description:
                      "Crunchy roasted almonds in creamy milk base.\nBalanced sweetness and nutty flavor.\nRich and satisfying scoop.",
                  },
                  {
                    id: "ni5",
                    name: "Chocolate Ice Cream",
                    price: 15900,
                    rating: "4.4",
                    isVeg: true,
                    description:
                      "Classic chocolate made from real cocoa.\nSmooth, dense and chocolaty.\nPerfect for all age groups.",
                  },
                ],
              }),
            ],
          },
        },
      },
    },
  ],
},


};

export default mockMenu;
