import React from "react"
import { useNavigate } from "react-router-dom"

function InvalidScreen(){
 const navigate=useNavigate()
 const navigatetoHome=()=>{
    navigate("/")
 }
    
    return(
        <>
        <h1>404 error visit homepage</h1>
        <button onClick={navigatetoHome}> on click</button>
        </>
    )
}

export default InvalidScreen