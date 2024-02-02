import React, { useEffect, useState } from 'react'
import CardFeature from './CardFeature'
import Filter from './Filter'
import { useSelector } from 'react-redux'

function Allproducts({heading, onClick}) {
    const productData = useSelector((state) => state.product.productList)
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


  return (
    <div>

<div className='my-4'>
                  <h2 className='font-bold text-2xl text-slate-800 mx-2'>{heading}</h2>

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
                        onClick={onClick}
                    />
                  )
                })
              }
            </div>
    </div>
    )
}

export default Allproducts