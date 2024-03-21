
const initialstate={
    Counter:0,
    totalChacolates:100,
    availableChacolate:100,
  }
export  function Reducercounter(state=initialstate,action){
switch(action.type){
  case "INCREMENT":
    return{...state,Counter:state.Counter-1}
    // case "DECREMENT":
    //   return(...state,Counter:state.counter-1)  
      case "BUY-CHACOLATES":
      return{...state,totalChacolates:state.totalChacolates+action.payload}
       case "RETURN-CHACOLATES":
      return{...state,availableChacolate:state.availableChacolate-action.payload}
      default:
        return state
}

}