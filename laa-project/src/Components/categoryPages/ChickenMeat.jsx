import React, { useEffect, useState } from 'react'
import Loading from '../utils/loading/Loading'
import BtnRender from '../utils/productItem/BtnRender'
import axios from 'axios'
import Announcement from '../Announcement'
import Navbar from '../Navbar'
import { Footer } from '../Footer'

function ChickenMeat() {
    const [loading, setLoading] = useState(false)
    const[products, setProduct] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Set loading state to true before making the request
                const response = await axios.get('http://localhost:8000/api/product?title[regex]=Chicken');
                setProduct(response.data.product);
                setLoading(false); // Set loading state to false after receiving the response
                console.log(response.data.product);
            } catch (err) {
                setLoading(false); // Set loading state to false in case of an error
                alert(err.response.data.msg);
            }
        };

        fetchData();
    }, []);
    if(loading) return <div><Loading/></div>
  return (
    <>
    <Announcement/>
    <Navbar/>
    <div className='products'>
      {
        products.map(product=>{
            return (
                <>
                <div className='product_card'>
                <img src={product.image.url} alt=""/>
<               div className="product_box">
                <h2 title={product.title}>{product.title}</h2>
                <p>{product.desc}</p>
                <span>Rs.{product.price}</span>
                 </div>
                 <BtnRender product={product}/>
                </div>
                </>
            )
        })
      }
    </div>
    <Footer/>
    </>
  )
}

export default ChickenMeat;