import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Dnaspinner from '../spinner/dna'
import axios from 'axios'
function ProductScreen() {
  const paramsInformation=useParams()
  const[productDetail,setproductDetail]=useState({})

  useEffect(()=>{
    fetchProductData()
  },[paramsInformation.Product])
async function fetchProductData(){
  const result=await axios.get(`https://fakestoreapi.com/products/${paramsInformation.product}`)
  if(result.status===200){
    setproductDetail(result.data)
  }
  console.log(result)
}


function isEmpty(data){
  
  return Object.keys(data).length === 0
   
   
}
   

  return (
    <div>
      {
        isEmpty(productDetail) 
        ?
        <Dnaspinner/>
   
        :
        <>
   
     
        <h3>{productDetail.category}</h3>
        <img src={productDetail.image} alt={productDetail.title} width={400} height={300} />
        
        </>

      }

    </div>
  )
}


export default ProductScreen