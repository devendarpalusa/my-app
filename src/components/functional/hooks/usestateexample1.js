import { useState } from "react"
const UseStateExample=()=>{
    const[counter,setCounter]=useState(0)

const handleChange =(value)=>{
    switch(value){
        case "increment":
        setCounter(counter-1)
break
case "decrement":
    setCounter(counter+1)
break
 case "reset":
setCounter(0)
break
        default:
        break


    }


}



return(
<>
        <h1>hi use state</h1>
        <h2>counter value {counter}</h2>
<button onClick={()=>handleChange("increment")}>increment</button>
<button onClick={()=>handleChange("decrement")}>decrement</button>
<button onClick={()=>handleChange("reset")}>reset</button>

        </>
    )


}
export default UseStateExample;