import React, { useState } from 'react'
import { FiUpload } from "react-icons/fi";
import { ImageToBase64 } from '../utility/ImageToBase';
import toast from 'react-hot-toast';

function Newproduct() {

const [data, setData] = useState({
  name: "",
  category: "",
  image: "",
  price: "",
  description: ""
})


function handleOnChange(e){
  const {name, value } = e.target
  setData(prevE => {
    return {
      ...prevE, [name] : value
    } 
  })

}

async function uploadImage(e) {
    const data = await ImageToBase64(e.target.files[0])
    setData((prevE)=> {
      return {
        ...prevE,
        image : data
      }
    })


}

async function handleSubmit(e){
  e.preventDefault()

  if(data.name && data.image && data.category && data.price){
    const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/newproduct`, {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    const dataRes = await fetchData.json()
    toast(dataRes.message)
  }else{
    toast("Please Input all the required fields")
  }
 
  setData(() => {
    return {
      name: "",
      category: "",
      image: "",
      price: "",
      description: ""
    }
  })
 
}

console.log(process.env.REACT_APP_ADMIN_EMAIL);

  return (
    <div className='p-4 '>
      <form onSubmit={handleSubmit} className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-white'>
        <label htmlFor='name'>Name</label>
        <input 
          type={'text'} 
          name='name' 
          className='bg-slate-200 p-1 my-1'
          onChange={handleOnChange}
          value={data.name}
        />

        <label htmlFor='category'>Category</label>
        <select onChange={handleOnChange} name='category' className='bg-slate-200 p-1 my-1' id='category' value={data.category}>
          <option>Select Category</option>
          <option>Fruit</option>
          <option>Vegetable</option>
          <option>IceCream</option>
          <option>Dosa</option>
          <option>Pizza</option>
        </select>

        <label htmlFor='image'>Image
          <div  className='h-40 w-full overflow-hidden cursor-pointer bg-slate-200 rounded flex items-center justify-center over'>
            {
              data.image ? <img src={data.image} alt='' className='object-cover'/> : <span className='text-5xl'><FiUpload /></span>
            }
              
              <input 
                  type={'file'} 
                  onChange={uploadImage} 
                  className='hidden' 
                  id='image' 
                  accept='image/*'
                  onChangeCapture={handleOnChange}
                  // value={data.image}
              />
          </div>
        </label>

        <label htmlFor='price' className='my-1'>Price</label>
        <input 
            type={'text'} 
            className='bg-slate-200 p-1 my-1' 
            onChange={handleOnChange} 
            name='price' 
            value={data.price}
        />

        <label htmlFor='description'>Description</label>
        <textarea onChange={handleOnChange} value={data.description} name='description' rows={2} className='bg-slate-200 p-1 my-1 resize-none' ></textarea>

        <button className='bg-red-500 hover:bg-red-600 text-white font-medium my-2 drop-shadow'>Save</button>
      </form>
    </div>
  )
}

export default Newproduct