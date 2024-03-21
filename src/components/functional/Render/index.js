const ConditionalRender=()=>{
    let arrayofobj =
    [{name:"Devendar",marks:70,id:1},
    {name:"virat",marks:79,id:2},
    {name:"vishwa",marks:96,id:3},
    {name:"pranav",marks:89,id:4}]
    return (
    <div>  

{
 arrayofobj.map((eachObject) =>{

const {marks,name,id}=eachObject
    
    return (
      <div key={id}>
      <h4>{name}</h4>
      <h4>marks obtained {marks}</h4>
    {

marks > 90 ? <h5>Secured A+ grade</h5> : marks > 80 ? <h5>Secured A grade</h5> : marks > 60 ? <h5>Secured B+</h5> : marks > 40 ? <h5>Pass</h5> : <h5>Better luck next time, Your near to goal</h5>
  } 
    
 <div style={{width:"30%" ,height:2, backgroundcolor:"red"}}/>
</div>
    )


})
}
</div>
)
}
export default ConditionalRender;