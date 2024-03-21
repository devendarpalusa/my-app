import React , { useState,useMemo } from "react"
function UseMemorisation() {
const[counter1,setcounter1]=useState(10)
const[counter2,setcounter2]=useState(10)

const isEven=useMemo(()=>{
    for( let i=0;i<=10000;i++){
    console.log(i)
}
console.log("isEven is checked")
return counter1%2===0?"EVEN":"ODD"
     
},[counter1])

    return(
        <>
        <h3>{isEven}counter A {counter1}</h3>
        <button onClick={()=>setcounter1(counter1+1)}>button</button>
        <h3>counter B{counter2}</h3>
        <button onClick={()=>setcounter2(counter2+1)}>button</button>
        </>

    )
}
export  default UseMemorisation;