// import React, { useEffect, useState } from 'react'
// import Loading from '../utils/loading/Loading'
// import BtnRender from '../utils/productItem/BtnRender'
// import axios from 'axios'
// import Announcement from '../Announcement'
// import Navbar from '../Navbar'
// import { Footer } from '../Footer'


// function RecipePage() {
//     const [loading, setLoading] = useState(false)
//     const[recipes] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true); // Set loading state to true before making the request
//                 const response = await axios.get('http://localhost:8000/api/recipes?title[regex]=Recipe');
//                 recipes(response.data.recipe);
//                 setLoading(false); // Set loading state to false after receiving the response
//                 console.log(response.data.recipe);
//             } catch (err) {
//                 setLoading(false); // Set loading state to false in case of an error
//                 alert(err.response.data.msg);
//             }
//         };

//         fetchData();
//     }, []);
//     if(loading) return <div><Loading/></div>
//   return (
//     <>
//     <Announcement/>
//     <Navbar/>
//     <div className='products'>
//       {
//         recipes.map(recipe=>{
//             return (
//                 <>
//                 <div className='product_card'>
//                 <video src={recipe.video.url} controls/>
// <               div className="product_box">
//                 <h2 title={recipe.title}>{recipe.title}</h2>
//                 <p>{recipe.cooktime}</p>
//                 <span>Rs.{recipe.description}</span>
//                  </div>
//                  <BtnRender recipe={recipe}/>
//                 </div>
//                 </>
//             )
//         })
//       }
//     </div>
//     <Footer/>
//     </>
//   )
// }

// export default RecipePage;