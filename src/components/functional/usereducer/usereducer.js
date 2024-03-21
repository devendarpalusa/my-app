import { useReducer, useState } from "react"

function reducer(state,action){

switch(action.type){
   
    case "DECREMENT-AGE":
        return{...state,age:state.age-10}
        case "INCREMENT-AGE":
            return{...state,age:state.age+10}
            case "INCREMENT-SALARY":
            return{...state,salary:state.salary+1000}
            case "ADDING-SKILLS":
            return{...state,skills:[...state.skills,"ADDING NEW SKILLS"]}
            case "CHANGE-NAME":
                return{...state,name:action.payload}
        default:
            return state
}

    
}


const Initialstate={
    age:100,
    salary:10000,
    name:"user1",
    skills:["html","css"]

}
function UseReducer(){

   const[currentstate,dispatch] =useReducer(reducer,Initialstate)
const handleIncrementAge=()=>{
    dispatch(
        {
            type:"INCREMENT-AGE"
        }
    )


}

const handleDecrementAge=()=>{
    dispatch(
        {
            type:"DECREMENT-AGE"
        }
    )


}

const handleIncrementsalary=()=>{
    dispatch(
        {
            type:"INCREMENT-SALARY",

        }
    )


}
const handleChangename=()=>{
    dispatch(
        {
            type:"CHANGE-NAME",
payload:"chintu"
        }
    )


}

return(
    <div>
<h1>current name {currentstate.name}</h1>
<button onClick={handleChangename}>change name</button>
<h1>currentage {currentstate.age}</h1>
<button onClick={handleDecrementAge}>decrement age</button>

<button onClick={handleIncrementAge}>increment age</button>
<h1>current salary{currentstate.salary}</h1>
<button onClick={handleIncrementsalary}>incrementsalary</button>
    </div>
)


}
export default UseReducer