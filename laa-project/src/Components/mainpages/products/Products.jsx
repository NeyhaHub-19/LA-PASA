import React, {useContext,  useState} from 'react'
import ProductItem from '../../utils/productItem/ProductItem'
import { GlobalState } from '../../../GlobalState'
import Loading from '../../utils/loading/Loading'
import axios from 'axios'
import Navbar from '../../Navbar'
import { Footer } from '../../Footer'
import Announcement from '../../Announcement'


function Products() {
  const state = useContext(GlobalState)
  const [products, setProducts] = state.productAPI.products
  const [isAdmin] = state.userAPI.isAdmin
  const [token] = state.token
  const [callback, setCallback] = state.productAPI.callback
  const [loading, setLoading] = useState(false)
  const [isCheck, setIsCheck] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(10 / itemsPerPage);


  const handleCheck = (id)=>{
    products.forEach(product=>{
      if(product._id===id) product.checked = !product.checked
    })
    setProducts([...products])
  }

  const deleteProduct = async(id, public_id)=>{
    console.log({id, public_id})

    try{
      setLoading(true)
      const destroyImg = axios.post('http://localhost:8000/api/destroy',{public_id},{
        headers: {Authorization: token}
      })

      const deleteProduct =axios.delete(`http://localhost:8000/api/deleteProduct/${id}`,{
        headers: {Authorization: token}
      })

      await destroyImg
      await deleteProduct
      setCallback(!callback)
      setLoading(false)
    }catch(err){
      alert(err.response.data.msg)
    }
  }

  const checkAll = ()=>{
    products.forEach(product=>{
      product.checked = !isCheck
    })

    setProducts([...products])
    setIsCheck(!isCheck)
  }

  const deleteAll= ()=>{
    products.forEach(product=>{
      if(product.checked) deleteProduct(product._id, product.image.public_id)
    })

  }

  if(loading) return <div><Loading/></div>
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          style={{
            background: currentPage === i ? '#fff' : '#006D5B',
            color: currentPage === i ? '#000' : '#fff',
            border: '1px solid #ccc',
            padding: '5px 10px',

            borderRadius: '5px',
            cursor: 'pointer',
            margin: '0 5px'
          }}
        >
          {i}
        </button>
      );
    }
    return pages;
};


  return (
    <>
    <Announcement/>
    <Navbar/>
     {
      isAdmin &&
      <div className='delete-all'>
        <span>Select all</span>
        <input type='checkbox' checked={isCheck} onChange={checkAll}/>
        <button onClick={deleteAll}>Delete all</button>
      </div>
    }
    <div className="products">
      {
        products.map(product=>{
          return <ProductItem key={product._id} product={product}  isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
          
        })
      }

    </div>
    {products.length === 0  && <Loading />}
    <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px',
    }}>
    {renderPagination()}
</div>

    <Footer/>


    
    
   
    </>

  )
}

export default Products