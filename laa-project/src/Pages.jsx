import React, { useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import { GlobalState } from "./GlobalState";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPasswordPage from "./Pages/ResetPasswordPage"
import Recipe from "./Pages/Recipe";
import Categories from "./Components/mainpages/categories/Categories";
import CreateProduct from "./Components/mainpages/createProduct/CreateProduct";
import Products from "./Components/mainpages/products/Products";
import CreateRecipe from "./Components/mainpages/createRecipe/CreateRecipe";
import DetailProduct from "./Components/mainpages/detailProduct/DetailProduct";
import UserProfile from "./Components/UserPofile/UserProfile";
import NotFoundPage from  "./Pages/NotFoundPage"
import EmailVerifyPage from "./Pages/EmailVerifyPage";
import Cart from "./Components/mainpages/cart/Cart";
import UserList from "./Components/UserList";
import ViewCart from "./Components/viewcart/ViewCart";
import UpdateUser from "./Components/UpdateUser";
import Success from "./Components/Success";
import PigMeat from "./Components/categoryPages/PigMeat";
import ChickenMeat from "./Components/categoryPages/ChickenMeat";
import FrozenProduct from "./Components/categoryPages/FrozenProduct";
import AboutUs from "./Components/aboutUs/AboutUs";
import RatingReview from "./Components/aboutUs/RatingReview";
import PaymentSuccess from "./Components/paymentSuccess/PaymentSuccess";


function Pages(){
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    return(
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login" element={<Login/>} />
        <Route
          path="/register" element ={<Register />}/>
       
        <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
        <Route path="/api/reset-password/:id/reset/:token" element={<ResetPasswordPage/>}/>
        <Route path="/recipes" element={<Recipe/>} /> 
        <Route path="/category" element={isAdmin?<Categories/>:<NotFoundPage/>}/>
        <Route path="/create_product" element={isAdmin?<CreateProduct/>:<NotFoundPage/>}/>
        <Route path="/edit_product/:id" element={isAdmin?<CreateProduct/>:<NotFoundPage/>}/>
        <Route path="/admin/products" element={<Products/>}/>
        <Route path="/create_recipe" element={isLogged?<CreateRecipe/>:<NotFoundPage/>}/>
        <Route path="/detail/:id" element={<DetailProduct/>}/>
        <Route path="/user/profile/:id" element ={isLogged?<UserProfile/>:<NotFoundPage/>}/>
        <Route path="/api/users/:id/verify/:token" element={<EmailVerifyPage/>}/>
        <Route path="/cart" element={isLogged?<Cart/>:<NotFoundPage/>}/>
        <Route path="/user/:id/cart" element={isLogged?<ViewCart/>:<NotFoundPage/>}/>
        <Route path="/updateUser/:id" element={isLogged?<UpdateUser/>:<NotFoundPage/>}/>
        <Route path="/edit_recipe/:id" element={isLogged?<CreateRecipe/>:<NotFoundPage/>}></Route>
        <Route path="/allUsers" element={isAdmin?<UserList/>:<NotFoundPage/>}></Route>
        <Route path="/sucess" element={<Success/>}/>
        <Route path="/products/pork" element={<PigMeat/>}/>
        <Route path="/products/chicken" element={<ChickenMeat/>}/>
        <Route path="/products/frozen products" element={<FrozenProduct/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
         <Route path="/review" element ={<RatingReview/>}/>
         <Route path="/success" element={<PaymentSuccess/>}/>
      </Routes>
        </>
    )
}

export default Pages;