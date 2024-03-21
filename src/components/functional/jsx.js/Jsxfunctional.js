const Jsxfunctional =()=>{

const obj={name:"devendar",
age:23,
width:100,
height:150
}
return(

<>
<h2>good morning {obj.name}</h2>
<button onClick={()=>{}}>click</button>
<img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" width={obj.width} height={obj.height} alt="imag"></img><br></br>
<>
<div className="awesome" style={{color:"red"}}>
<label htmlFor="name">enter your name:</label>
<input type="text" placeholder="hi please enter your name"></input>
</div>
<p>enter your name</p>
</>
</>

)

}
export default Jsxfunctional;