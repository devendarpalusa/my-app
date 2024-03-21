import { useState } from "react"

function useCounter(initial,value){
const[counter,setcounter]=useState(initial)
const handleIncrement=()=>{
    setcounter(counter+value)

}

return(
    [counter,handleIncrement,"customhook"]
)
}
export default useCounter