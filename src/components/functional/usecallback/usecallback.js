import React , { useState, useCallback } from "react"
import Button from "./button"
function UseCallback() {
const[age,setage]=useState(25)
const[salary,setsalary]=useState(10000)

const handleAge=useCallback(()=>{
setage(age+5)
     
},[age])
const handlesalary=useCallback(()=>{
    setsalary(salary+1000)
         
    },[salary])
    

    return(
        <>
        <h3>current salary{salary}</h3>
        <Button onClick={handlesalary}>button</Button>
        <h3>current age{age}</h3>
        <Button onClick={handleAge}>button</Button>
        </>

    )
}
export  default UseCallback;