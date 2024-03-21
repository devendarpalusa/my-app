import { useContext } from "react"
import Routingnavbar from "../routeing/navbar"
import UseEffectExample4 from "../useeffect/useffectCard"
import { MessageInformation } from "../navigation/navigation"
function HomeScreen() {
  const {Message,greetings,messagechanger}=useContext(MessageInformation)
    return (
      <>
  
          <Routingnavbar/>
          <h2>{Message}</h2>
          <button onClick={messagechanger}>CHANGE MESSAGE</button>
          <br/>

  <UseEffectExample4/>
  
          
      </>
    )
  }
  
  export default HomeScreen