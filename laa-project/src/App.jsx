import React from "react";
import Home from "./Pages/Home";
import ProductList from "./Pages/ProductList";
import Product from "./Pages/Product";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Cart from "./Pages/Cart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ForgetPassWord from "./Pages/ForgetPassword";
import ResetPasswordPage from "./Pages/ResetPasswordPage"
import Recipe from "./Pages/Recipe";
import { DataProvider } from "./GlobalState";
import Categories from "./Components/mainpages/categories/Categories";
import CreateProduct from "./Components/mainpages/createProduct/CreateProduct";
import Products from "./Components/mainpages/products/Products";
import CreateRecipe from "./Components/mainpages/createRecipe/CreateRecipe";
import DetailProduct from "./Components/mainpages/detailProduct/DetailProduct";



const App = () => {
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login" element={<Login/>} />
        <Route
          path="/register" element ={<Register />}/>
        <Route path="/products/:category" element={<ProductList />} />
         <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/forgotpassword" element={<ForgetPassWord />} /> 
        <Route path="/resetpassword" element={<ResetPasswordPage/>}/>
        <Route path="/recipes" element={<Recipe/>} /> 
        <Route path="/category" element={<Categories/>}/>
        <Route path="/create_product" element={<CreateProduct/>}/>
        <Route path="/edit_product/:id" element={<CreateProduct/>}/>
        <Route path="/admin/products" element={<Products/>}/>
        <Route path="/create_recipe" element={<CreateRecipe/>}/>
        <Route path="/detail/:id" element={<DetailProduct/>}/>
        
      </Routes>
    </BrowserRouter>
    </DataProvider>
    
  );
};

export default App;
