import React, {useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';

function BtnRender({product, deleteProduct}){
    const state = useContext(GlobalState)
    const addToCart = state.userAPI.addToCart
    const [isAdmin] = state.userAPI.isAdmin
    const [detailProduct, setDetailProduct] = useState([])

    return(
    <>
    <div className='row_btn'>
    {
      isAdmin ? 
      <>
      <Link id='btn_add' to="#!" onClick={()=>deleteProduct(product._id, product.image.public_id)}>
      Delete</Link><Link id='btn_view' to={`/edit_product/${product._id}`}>Edit</Link>
    </>
     :
     <>
      <Link id='btn_product' to={`/cart`} style={{ background: '#333', color: '#fff', border: 'none', width: '130px', height: '40px', fontSize: '15px',padding:'10px' }} onClick={()=> addToCart} >
      View Cart
    </Link> <Link id='btn_view' to={`/detail/${product._id}`} style={{ background: 'teal', color: '#fff', border: 'none', width: '150px', height: '40px', fontSize: '15px',padding:'10px'}}>
      View Product
    </Link>
     </>
    }

  </div>
  </>

    )
}

export default BtnRender