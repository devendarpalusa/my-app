import { Reducer } from "redux"
const initialstate={
    Counter:0,
    totalChacolates:100,
    availableChacolates:100,
  }
export  function Reducercounter(state=initialstate,action){
switch(action.type){
  case "INCREMENT":
    return{...state,Counter:state.Counter-1}
     case "DECREMENT":
       return{...state,counter:state.Counter-1}  
      case "BUY-CHACOLATES":
      return{...state,availableChacolates:state.availableChacolates-action.payload}
       case "RETURN-CHACOLATES":
      return{...state,availableChacolates:state.availableChacolates+action.payload}
      default:
        return state
}

}