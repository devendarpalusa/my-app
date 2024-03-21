import React from "react";
import Routingnavbar from "./navbar";
import UseMemorisation from "../usememo/usememo";
import UseCallback from "../usecallback/usecallback";
import ParentComponentMemo from "../MEMO/parent";
const SettingScreen=()=>{

    return(
        <div>
        <Routingnavbar/>
        <h1>follow tool tips</h1>
        {/* <UseMemorisation/> */}
        <ParentComponentMemo/>
{/* <UseCallback/> */}
        </div>
    )
}
export default SettingScreen;