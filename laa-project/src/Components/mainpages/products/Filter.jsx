import React,{useContext, useState} from 'react'
import {GlobalState} from '../../../GlobalState'

function Filters() {
    const state = useContext(GlobalState)
    const [categories] = state.categoriesAPI.categories
    const [category, setCategory] = state.productAPI.category
    const [sort, setSort] = state.productAPI.sort
    const [search,setSearch] = state.productAPI.search
    
    const handleCategory =e =>{
        e.preventDefault()
        setCategory(e.target.value)
        console.log(e.target.value)
        setSearch('')
    }
  return (
    <div className='filter_menu' style={{display:'flex',justifyContent:'space-evenly'}}>
        <div className='row' style={{width:'30%'}}>
            <span style={{padding:'10px',margin:'10px', color:'Teal',fontSize:'20px',fontWeight:'700'}}>Filters:</span>
            <select name="category" value={category} onChange={handleCategory} style={{borderRadius:'10px',width:'300px'}}>
                <option value=''>All Products</option>
                {
                    categories.map(category=>(
                        <option value={"category=" + category._id} key={category._id}>
                            {category.name}
                        </option>
                    ))

                }

            </select>
        </div>
         <input type='text' value={search} placeholder="Enter your search!" onChange={e=> setSearch(e.target.value)} style={{borderRadius:'10px',width:'40%'}}/>
         <div className='row1' style={{width:'30%'}}>
            <span style={{color: 'teal', fontSize:'20px',fontWeight:'700',padding:'10px',margin:'10px'}}>SortBy:</span>
            <select value={sort} onChange={e=> setSort(e.target.value)} style={{ borderRadius:'10px',width:'300px'}}>
              <option value='sort=-sold'>Best sales</option>
              <option value='sort=-price'>Price: High-Low</option>
              <option value='sort=price'>Price: Low-High</option>

            </select>
        </div>
    </div>
  )
}

export default Filters