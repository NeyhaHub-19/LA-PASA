import React, {useContext,  useState} from 'react'
import RecipeItem from '../../utils/productItem/RecipeItem'
import { GlobalState } from '../../../GlobalState'
import Loading from '../../utils/loading/Loading'
import axios from 'axios'
import Navbar from '../../Navbar'
import { Footer } from '../../Footer'
import Announcement from '../../Announcement'


function Products() {
  const state = useContext(GlobalState)
  const [recipes, setRecipes] = state.recipeAPI.recipes
  const [isAdmin] = state.userAPI.isAdmin
  const [token] = state.token
  const [callback, setCallback] = state.recipeAPI.callback
  const [loading, setLoading] = useState(false)
  const [isCheck, setIsCheck] = useState(false)

  const handleCheck = (id)=>{
    recipes.forEach(recipe=>{
      if(recipe._id===id) recipe.checked = !recipe.checked
    })
    setRecipes([...recipes])
  }

  const deleteRecipe = async(id, public_id)=>{
    console.log({id, public_id})

    try{
      setLoading(true)
      const destroyVideo = axios.post('http://localhost:8000/api/destroyVideo',{public_id},{
        headers: {Authorization: token}
      })

      const deleteRecipe =axios.delete(`http://localhost:8000/api/deleteRecipe/${id}`,{
        headers: {Authorization: token}
      })

      await destroyVideo
      await deleteRecipe
      setCallback(!callback)
      setLoading(false)
    }catch(err){
      alert(err.response.data.msg)
    }
  }

  const checkAll = ()=>{
    recipes.forEach(recipe=>{
      recipe.checked = !isCheck
    })

    setRecipes([...recipes])
    setIsCheck(!isCheck)
  }

  const deleteAll= ()=>{
    recipes.forEach(recipe=>{
      if(recipe.checked) deleteRecipe(recipe._id, recipe.video.public_id)
    })

  }

  if(loading) return <div><Loading/></div>

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
        recipes.map(product=>{
          return <RecipeItem key={recipe._id} recipe={recipe}  isAdmin={isAdmin} deleteProduct={deleteProduct} handleCheck={handleCheck} />
          
        })
      }
    </div>
    {products.length === 0  && <Loading />}
    <Footer/>
   
    </>

  )
}

export default Products