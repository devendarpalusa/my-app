import { useEffect, useState } from "react"
import axios from "axios"
 function useAxios(URL){
const[data,setdata]=useState([])
useEffect(()=>{
        fetchdata()

    },[])
    async function fetchdata(){
        const result= await axios.get(URL)
        setdata(result.data)
    }
    return [data]
 }
 export default useAxios