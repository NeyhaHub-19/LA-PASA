import React from 'react'
import BtnRender from './BtnRender'



function ProductItem({product,isAdmin, deleteProduct,handleCheck}){
    return(
        <>
        
        <div className="product_card">
      {
        isAdmin && <input type="checkbox" checked={product.checked}
        onChange={()=>handleCheck(product._id)}/>
      }

        <img src={product.image.url} alt=""/>

        <div className="product_box">
            <h2 title={product.title}>{product.title}</h2>
            <p>{product.desc}</p>
            <span>Rs.{product.price}</span>
        </div>

       <BtnRender product={product} deleteProduct={deleteProduct}/>



    </div>

        </>
    )

}

export default ProductItem