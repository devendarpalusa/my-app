import axios from "axios"
import React,{useEffect,useState} from "react"
import Dnaspinner from "../spinner/dna"
const UseEffectExample2=()=>{
const[products,setproducts]=useState([])
 useEffect(()=>{

        axios.get("https://fakestoreapi.com/products")
        .then((response)=>{
if(response.status===200){

    setproducts(response.data)
}
else{

    alert("something went wrong")
}


        })



 },[])


    return(
        <>
        <h1>useffect example2</h1>

        {

products.length>0
?
products.map((eachobject)=>{

    return(

        <React.Fragment key={eachobject.id}>
            <h1>
{eachobject.title}

            </h1>
            <img src={eachobject.image}  width={200} height={200} alt=""></img>
            <h1>{eachobject.price}</h1>
           
        </React.Fragment>

    
    )
})
:<Dnaspinner/>

}
        </>
    )
}
export default UseEffectExample2;