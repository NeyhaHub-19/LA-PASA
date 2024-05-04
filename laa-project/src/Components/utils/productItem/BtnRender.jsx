import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';

function BtnRender({product, deleteProduct}){
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin

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
      <Link id='btn_product' to={`/detail/${product._id}`}style={{ background: '#333', color: '#fff', border: 'none', width: '130px', height: '40px', fontSize: '15px',padding:'10px' }}  >
      Add to Cart
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