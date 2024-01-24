import React, { useEffect, useRef, useState } from 'react'
import Homecard from '../components/Homecard'
import { useSelector } from 'react-redux'
import CardFeature from '../components/CardFeature';
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Filter from '../components/Filter';

function Home() {
  const productData = useSelector((state) => state.product.productList)
  const homeProductCartList = productData.slice(0, 6)
  const homeProductcartListVegetable = productData.filter(item => item.category === 'Vegetable')

  const loadingArray = new Array(6).fill(null)
  const moveUseRef = useRef()

  const categoryList = [...new Set(productData.map(item => item.category))]

  // Filter display data
  const [filterBy, setFilterBy] = useState()
  const [dataFilter, setDataFilter] = useState([])

  useEffect(() => {
    setDataFilter(productData)

  }, [productData])
  

  function handleFilterProduct(category){
    const filter = productData.filter(item => item.category.toLowerCase() === category.toLowerCase())
    setDataFilter(() => {
      return[
          ...filter
      ]
    })
  }
  

  function moveNext(){
      moveUseRef.current.scrollLeft += 200
  }

  function movePrevious(){
    moveUseRef.current.scrollLeft -= 200

  }

  return (
    <div className='p-2 md:p-4'>
      <div className='md:flex gap-4 py-2'>

        <div className='md:w-1/2 '>
          <div className='flex gap-3 items-center bg-blue-400 w-40 px-2 rounded-full font-medium text-white'>
              <p className='text-sm '>Bike Delivery</p>
              <img src='https://cdn-icons-png.flaticon.com/512/2972/2972185.png' alt='' className='h-7'/>
          </div>
          <h2 className='text-4xl md:text-7xl font-bold py-3'>The Fastest Delivery in <span className='text-blue-900'>Your Home</span> </h2>
          <p className='py-3 text-base'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
          <button className='font-bold bg-yellow-400 text-white px-2 py-2 rounded-lg'>Order Now</button>
        </div>

        <div className='md:w-1/2 flex flex-wrap gap-5 justify-center'>
          {
            homeProductCartList[0]?
            homeProductCartList.map(item => {
              return(
                <Homecard
                  key={item._id}
                  image = {item.image}
                  name = {item.name}
                  price = {item.price}
                  category = {item.category}
                />
              )
            })
            : loadingArray.map(item => {
              return(
                <Homecard 
                  loading={'Loading...'}
                />
              )
            })
          }
        </div>
      </div>
      <div className=''>
            <div className='flex items-center my-3'>
              <h2 className='font-bold text-2xl text-slate-800 mt-3'>Fresh Vegetables</h2>
              <div className='ml-auto '  >
                <button onClick={movePrevious} className='bg-slate-200 hover:bg-slate-300 text-2xl rounded mx-2'><FcPrevious /></button>
                <button onClick= {moveNext} className='bg-slate-200 hover:bg-slate-300 text-2xl rounded'><FcNext /></button>
              </div>
            </div>
            <div className='flex gap-4 overflow-scroll scrollbar-none scroll-smooth animation transition-all' ref={moveUseRef}>
              { homeProductcartListVegetable.map(item => {
                return(
                  <CardFeature 
                    key={item._id}
                    id={item._id}
                    image = {item.image}
                    name = {item.name}
                    price = {item.price}
                    category = {item.category}
                  />
                )
              })
              }
            </div>

            <div className='my-4'>
              <h2 className='font-bold text-2xl text-slate-800 '>Your Product</h2>
              <div className='flex gap-6  items-center justify-center py-2 overflow-scroll scrollbar-none'>
                  {
                    categoryList[0] && categoryList.map(item => {
                      return(
                        <Filter 
                          category={item}
                          onClick={() => handleFilterProduct(item)}
                        />
                      )
                    })
                  }
                    
              </div>
            </div>

            <div className='flex flex-wrap gap-4 justify-center'>
              {
                dataFilter.map(item => {
                  return(
                    <CardFeature 
                        key={item._id}
                        id={item._id}
                        image={item.image}
                        name = {item.name}
                        price = {item.price}
                        category = {item.category}
                    />
                  )
                })
              }
            </div>
      </div>
    </div>
  )
}

export default Home