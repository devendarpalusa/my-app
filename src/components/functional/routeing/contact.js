import React from "react";
import { useContext } from "react";
import { MessageInformation } from "../navigation/navigation";
import Routingnavbar from "./navbar";
import UseReducer from "../usereducer/usereducer";
import useCounter from "../custom hook/usecounterhook";
const Contactscreen=(initial,value)=>{
    const[counter,setcounter]=useCounter(100,10)
    const {Message,greetings,messagechanger}=useContext(MessageInformation)
    return(
        <div>
        {/* <Routingnavbar/>
        <h1>{Message}</h1>
        <UseReducer/> */}
<h1>counter{counter}</h1>
<button onClick={setcounter}>counter</button>
        
        
        
        </div>
    )
}
export default Contactscreen;