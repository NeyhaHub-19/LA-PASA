import item1 from "./image/item1.png";
import item2 from "./image/item2.jpg";
import item3 from "./image/item3.jpg";

// imports for Categories
import frozen from "./image/frozen.png";
import chicken from "./image/chicken.png";
import PORK from "./image/PORK.png";
import recipe from "./image/recipe.png"

// imports for popularproducts
import paw from "./image/paw.jpg";
import CLiver from "./image/CLiver.jpg";
import drm from "./image/drm.jpg";
import whlc from "./image/whlc.jpg";
import sprib from "./image/sprib.jpg";
import gc from "./image/gc.jpg";
// import { Filter } from "@mui/icons-material";
import page_not_found from "./image/page_not_found.webp"


import porkribs from "./videos/pork ribs.mp4"


export const sliderItems = [
  {
    
    id: 1,
    img: item1,
    title: "SUPER SALE",
    desc: "Don't compromise on quality!! get 30% off for frozen products",
    bg: "f5fafd",
  },

  {
    id: 2,
    img: item2,
    title: "MEGA OFFER",
    desc: "Don't compromise on quality!! get 30% off for frozen products",
    bg: "fcf1ed",
  },

  {
    id: 2,
    img: item3,
    title: "BEST SELLERS",
    desc: "Don't compromise on quality!! get 30% off for frozen products",
    bg: "f5fafd",
  },
];

export const categories = [
  {
    id: 1,
    img: PORK,
    title: "PORK",
    cat:"pork"
  },

  {
    id: 2,
    img: chicken,
    title: "CHICKEN",
    cat: "chicken"
    
  },

  {
    id: 3,
    img: frozen,
    title: "FROZEN",
    cat:"frozen products"

  },

  {
    
    id: 4,
    img: recipe,
    title: "Recipe",
    cat:"recipes"
  },
];


 
    export const popularProduct = [
      {
        id: 1,
        img: paw,
        type: "fresh",
        available: "Combo Offers",  // Ensure this property matches one of the filter options
        countInStock: 10, 
        price: 250,
        createdAt: "2023-01-01"  // Example date format
      },
      {
        id: 2,
        img: CLiver,
        available: "new arrivals",
        type: "packed",
        countInStock: 5, 
        price: 500,
        createdAt: "2023-01-02"
      },
      {
        id: 3,
        img: drm,
        type: "fresh",
        countInStock: 8,
        price: 150,
        createdAt: "2023-01-03"
      },
      {
        id: 4,
        img: whlc,
        type: "packed",
        countInStock: 2,
        price: 300,
        createdAt: "2023-02-01"
      },
      {
        id: 5,
        img: sprib,
        type: "fresh",
        countInStock: 0,  
        price: 350,
        createdAt: "2023-02-15"
      },
      {
        id: 6,
        img: gc,
        type: "fresh",
        countInStock: 15,
        price: 200,
        createdAt: "2023-02-20"
      },
    ];



    export const recipeData = [
    //   {
    //   title: "Pork Choila",
    //   desc: "Belly pork choila in newari style",
    //   video: porkchoila,
      

    // },
    // {
    //   title:"Pork chop",
    //   desc:"butter garlic pork choila at home. Tastes just like restaurant style",
    //   video: porkchop,
    //     },
    {
      title:"Pork Ribs",
      desc:"delicious pork ribs recipe in chienese",
      video:porkribs,
      
    }
  ]
    
    
  export const NotFound = [
    {
      title:"pagenotfound",
      desc:"notfound",
      img:page_not_found,
      
    }

  ]