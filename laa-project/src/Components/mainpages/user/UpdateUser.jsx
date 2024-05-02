import React from 'react'

function UpdateUser() {
  return (
    <div className='create_product'>
    <div className='upload'>
        <input type='file' name='file' id='file_up' onChange={handleUpload}/>
        {
            loading ? <div id="file_img"><Loading/></div>:
            <div id="file_img" style={styleUpload}>
            <img src={images ? images.url: ''} alt=''/>
            <span onClick={handleDestroy}>X</span>
             </div>
        }
    </div>

    <form>
        <div className='rows'>
            <label htmlFor=''>Username</label>
            <input type='text' name='title' id='title' required value={product.title} onChange={handleChangeInput}/>
        </div>
        <div className='rows'>
            <label htmlFor='desc'>Description</label>
            <input type='text' name='desc' id='desc' required value={product.desc} onChange={handleChangeInput}/>
        </div>
        <div className='rows'>
            <label htmlFor='price'>Price</label>
            <input type='number' name='price' id='price' required value={product.price} onChange={handleChangeInput}/>
        </div>
        <div className='rows'>
            <label htmlFor='categories'>Categories:</label>
            <select name='category' value={product.category} onChange={handleChangeInput}>
            <option value="">Please select a category</option>
         {categories.map(category => (
         <option value={category._id} key={category._id}>
          {category.name}
           </option>
         ))}
        </select>

        </div>
    <button type='submit'>{onEdit? "Update" : "Create"}</button>
    </form>
</div>
  )
}

export default UpdateUser
