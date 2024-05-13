import React, { useContext } from "react";
import Home from "./Pages/Home";

import Register from "./Pages/Register";
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import ForgotPassword from "./Pages/ForgotPassword";
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
import ViewCart from "./Components/viewcart/ViewCart";
import UpdateUser from "./Components/UpdateUser";
import Success from "./Components/Success";
import PigMeat from "./Components/categoryPages/PigMeat";
import ChickenMeat from "./Components/categoryPages/ChickenMeat";
import FrozenProduct from "./Components/categoryPages/FrozenProduct";
import RecipePage from "./Components/categoryPages/RecipePage";


function App(){
  
  return (
    <DataProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login" element={<Login/>} />
        <Route
          path="/register" element ={<Register />}/>
       
        <Route path="/forgotpassword" element={<ForgotPassword/>} /> 
        <Route path="/api/reset-password/:id/reset/:token" element={<ResetPasswordPage/>}/>
        <Route path="/recipes" element={<Recipe/>} /> 
        <Route path="/category" element={<Categories/>}/>
        <Route path="/create_product" element={<CreateProduct/>}/>
        <Route path="/edit_product/:id" element={<CreateProduct/>}/>
        <Route path="/admin/products" element={<Products/>}/>
        <Route path="/create_recipe" element={<CreateRecipe/>}/>
        <Route path="/detail/:id" element={<DetailProduct/>}/>
        <Route path="/admin/profile" element ={<AdminProfile/>}/>
        <Route path="/user/profile/:id" element ={<UserProfile/>}/>
        <Route path="/api/users/:id/verify/:token" element={<EmailVerifyPage/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/user/:id/cart" element={<ViewCart/>}/>
        <Route path="/updateUser/:id" element={<UpdateUser/>}/>
        <Route path="/edit_recipe/:id" element={<CreateRecipe/>}></Route>
        <Route path="/allUsers" element={<UserList/>}></Route>
        <Route path="/sucess" element={<Success/>}/>
        <Route path="/products/pork" element={<PigMeat/>}/>
        <Route path="/products/chicken" element={<ChickenMeat/>}/>
        <Route path="/products/frozen products" element={<FrozenProduct/>}/>
        <Route path="/products/recipe" element={<RecipePage/>}/>
      </Routes>
    </BrowserRouter>
    </DataProvider>
    
  );
};

export default App;
