import React from "react";
import Routingnavbar from "./navbar";
import useCounter from "../custom hook/usecounterhook";
import useAxios from "../custom hook/useaxios";
const AboutScreen=(initial)=>{
const[salary,setSalary]=useCounter(10000,1000)
const[categories]=useAxios("https://fakestoreapi.com/products/categories")
    return(
        <div>
        <Routingnavbar/>
        <h1>{salary}</h1>
        <button onClick={setSalary}>SALARY INCREMENT</button>
        {

            categories.length>0
            ?
            categories.map(Eachstring => <h1>{Eachstring}</h1>)
            :
            <h2>categerios not available</h2>
        
        }

       </div>
    )
}
export default AboutScreen;