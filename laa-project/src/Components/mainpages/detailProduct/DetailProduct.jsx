import React, {useContext, useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../../utils/productItem/ProductItem";
import Navbar from "../../Navbar";
import Announcement from "../../Announcement";
import { Footer } from "../../Footer";

function DetailProduct(){

    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productAPI.products
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(()=>{
        if(params){
            products.forEach(product=>{
                if(product._id === params.id)  setDetailProduct(product)
            })
        }
    },[params, products])
    console.log(detailProduct)
    if(detailProduct.length ===0) return null;
    return(
        <>
        <Announcement/>
        <Navbar/>
        <div className="detail">
      <img src={detailProduct.image.url} alt=""/>
      <div className="box-detail">
        <div className="row">
          <h2>{detailProduct.title}</h2>
          <h6>#id: {detailProduct.product_id}</h6>
          </div>
          <span> Rs.{detailProduct.price}</span>
          <p>{detailProduct.desc}</p>
        <p>Sold: {detailProduct.sold}</p>
      </div>
    </div>

    <div>
     <h3>Other Products</h3>
     <div className="products">
      {
        products.map(product=>{
          return product.category === detailProduct.category 
          ? <ProductItem key={product._id} product={product}/> : null

        })
      }
     </div>
    </div>
    <Footer/>
        </>
    )
}

export default DetailProduct