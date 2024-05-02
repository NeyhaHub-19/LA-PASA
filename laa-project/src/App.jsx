import React from "react";
import Home from "./Pages/Home";

import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ForgetPassWord from "./Pages/ForgetPassword";
import ResetPasswordPage from "./Pages/ResetPasswordPage"
import Recipe from "./Pages/Recipe";
import { DataProvider } from "./GlobalState";
import Categories from "./Components/mainpages/categories/Categories";
import CreateProduct from "./Components/mainpages/createProduct/CreateProduct";
import Products from "./Components/mainpages/products/Products";
import CreateRecipe from "./Components/mainpages/createRecipe/CreateRecipe";
import DetailProduct from "./Components/mainpages/detailProduct/DetailProduct";
import AdminProfile from "./Pages/AdminProfile"
// import Profile from "./Pages/Profile"
import UserProfile from "./Components/UserPofile/UserProfile";
import NotFoundPage from  "./Pages/NotFoundPage"
import EmailVerifyPage from "./Pages/EmailVerifyPage";
import Cart from "./Components/mainpages/cart/Cart";
import UserList from "./Components/UserList";

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
       
        <Route path="/forgotpassword" element={<ForgetPassWord />} /> 
        <Route path="/resetpassword" element={<ResetPasswordPage/>}/>
        <Route path="/recipes" element={<Recipe/>} /> 
        <Route path="/category" element={<Categories/>}/>
        <Route path="/create_product" element={<CreateProduct/>}/>
        <Route path="/edit_product/:id" element={<CreateProduct/>}/>
        <Route path="/admin/products" element={<Products/>}/>
        <Route path="/create_recipe" element={<CreateRecipe/>}/>
        <Route path="/detail/:id" element={<DetailProduct/>}/>
        <Route path="/admin/profile" element ={<AdminProfile/>}/>
        <Route path="/user/profile" element ={<UserProfile/>}/>
        <Route path="/notfound" element ={<NotFoundPage/>}/>
        <Route path="/api/users/:id/verify/:token" element={<EmailVerifyPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </DataProvider>
    
  );
};

export default App;
