import { useState, useEffect } from "react";
import axios from "axios";


function ProductsAPI(){
    const [products, setProducts] = useState([])
    const [callback, setCallback] = useState(false)

    useEffect(()=>{
        const getProducts = async()=>{
            const res = await axios.get('http://localhost:8000/api/product')
            setProducts(res.data.product)
            console.log(res.data.product)
        }
        getProducts()
    },[callback])

    return{
        products: [products, setProducts],
        callback: [callback, setCallback]
    }

}

export default ProductsAPI;