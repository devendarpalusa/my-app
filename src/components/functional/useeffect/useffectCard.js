import React, { useEffect, useState } from "react";
import axios from "axios";
import Dnaspinner from "../spinner/dna";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap"; 
import useaxios from "../custom hook/useaxios";

 const UseEffectExample4=()=>{
//     const URL="https://fakestoreapi.com/products"
//   const[products]  =useaxios()
const[products,setProducts]=useState([])

useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((response)=>{
        if(response.status===200){
            setProducts(response.data)
        }else{
            alert("something went wrong")
        }
   

    })
},[])

    return(
        <>
       
        
        {
            products.length>0
            ?

            products.map((eachObject)=>{
                return(
                    <React.Fragment key={eachObject.id} >
                     <Card style={{width:"400px",height:"430px",display:"inline-flex",margin:"15px"}}>  

                    <h2>{eachObject.title}</h2>
                    <img src={eachObject.image} width={"250px"} height={"250px"}  alt="" style={{float:"center"}}/>
                    <h5>{eachObject.price}</h5>
                    <button>
                    {/* <Link to={`/${eachObject.category}/${eachObject.id }`} >
                        Click to see the product</Link> */}to see more products
                    </button>
                    </Card>
                    </React.Fragment>

                )
            })
            :
            <Dnaspinner/>
        }  
        
      </>
        
    )
    }
export default UseEffectExample4;