import { useEffect, useState } from "react";


const UseeffectExample=()=>{
const[count,setCount]=useState(0)
const[count1,setCount1]=useState(1)

useEffect(()=>{
document.title=`current count ${count}`
console.log("use effect")


},[count])

return(

    <>
    <h1>UseeffectExample</h1>
    <h1>current count {count}</h1>
    <button onClick={()=>{setCount(count+1)}}>button</button>
    =========
    <h1>current count{count1}</h1>
    <button onClick={()=>{setCount1(count1+1)}}>button</button>
    </>
)



}
export default UseeffectExample;