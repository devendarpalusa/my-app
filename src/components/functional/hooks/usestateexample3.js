import { useState } from "react";
const UseStateExample3=()=>{
const[fruits,setfruits]=useState([ ["banana","apple","custredapple"]])





 
const listadd=()=>{
    const newfruits=[...fruits,"banana","custard","apple"]
    
   setfruits(newfruits)

}
const listdelete=()=>{

    const deletefruits=[...fruits]
deletefruits.pop()
    setfruits(deletefruits)
}

return(
<>
<h3>use state example</h3>
<h3>list</h3>
<button onClick={listadd}>listadd</button>
<button onClick={listdelete} style={{marginLeft:300, marginTop:10}}>deletefruits</button>


<ul>
{
            fruits.map((eachFruit,index)=><li key={index} >{eachFruit}</li>)
        }
</ul>



</>



)


}
export default UseStateExample3;