
import axios from "axios"
import React,{useEffect,useState} from "react"
import Dnaspinner from "../spinner/dna"
import "./table.css"
const UseEffectExample=()=>{

const[products,setproducts]=useState([])

useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
.then((response)=>{
    if(response.status===200){
        setproducts(response.data)
    }else{
        alert("something went wrong")
    }


})

},[])
    return(

        < table>

        {
        products.length>0
        ?
        products.map((eachObject)=>{
            return(
               
                    <tr >
                          <th>{eachObject.id}</th>  
                        <td>{eachObject.title}</td>
                         <td>{eachObject.category}</td> 
                         <td>{eachObject.description}</td>
                         <td>{eachObject.price}</td> 
                        <td><img src={eachObject.image} width={200} height={200} alt=""></img></td>
                    </tr>
  

            )
        })
        :
        <Dnaspinner/>
        }
                      </table>
    )
}
export default UseEffectExample