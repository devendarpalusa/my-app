import { BrowserRouter,Routes,Route } from "react-router-dom"
import AboutScreen from "../routeing/aboutrouting"
import SettingScreen from "../routeing/settingrouting"
import ContactScreen from "../routeing/contact"
import ProductScreen from "../routeing/productscreen"
import HomeScreen from "../routeing/homescreen"
import InvalidScreen from "../routeing/invalidscreen"
import { createContext, useState } from "react"
 export const MessageInformation=createContext()
const NavigationStack =()=>{
const [Message,setMessage]=useState("hello hi good morning")
const changeMessage=()=>{
    setMessage("good evening")
}
    return(
        <BrowserRouter>
        <MessageInformation.Provider value={{Message,
      greetings:"congrats",
      Messagechanger:changeMessage}}>
        <Routes>

        {/* List of routes in the app */}
        <Route  path="/" Component={HomeScreen}  />
        <Route  path="/about" Component={AboutScreen}  />
        <Route  path="/contact" Component={ContactScreen}  />
        <Route  path="/setting" Component={SettingScreen}  />

        <Route path="/:category/:product" Component={ProductScreen} />
<Route path="*" Component={InvalidScreen}/>

        </Routes>
        </MessageInformation.Provider>

        
        </BrowserRouter>
    )
}
export default NavigationStack

