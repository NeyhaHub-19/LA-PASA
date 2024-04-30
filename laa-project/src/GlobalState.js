import React, {createContext, useState, useEffect} from 'react';
import UserAPI from './api/UserAPI'
import axios from 'axios';
import CategoriesAPI from './api/CategoriesAPI';
import ProductsAPI from './api/ProductAPI';
import RecipeAPI from './api/RecipeAPI';




export const GlobalState = createContext()


export const DataProvider = ({children}) =>{
    const [token, setToken] = useState(false)

    useEffect(()=>{
        const firstLogin = localStorage.getItem('firstLogin')
        if(firstLogin){
            const refreshToken = async () =>{
                try {

                    const res = await axios.get('http://localhost:8000/api/refresh_token',{
                        withCredentials: true
                    })
                    console.log(res)
                    setToken(res.data.accesstoken);
                } catch (error) {
                    console.error("Error refreshing token:", error);
                }
        }

        refreshToken()
        }

    },[])

 

    const state = {
        token: [token, setToken],
        userAPI: UserAPI(token), 
        categoriesAPI: CategoriesAPI(),
        productAPI: ProductsAPI(),
        recipeAPI: RecipeAPI()
    }


    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}