import { Component} from "react"
import Dnaspinner from "../spinner/dna"

class Counter extends Component {
constructor(){
super()
this.state={
    // profession:false,
    isSubscribe:false,

employe:[{id:1,profession:"js dev"},
          {id:2,profession:"angular js dev"},
           {id:3,profession:"react js dev"}]


}

}
handleSubscribe=()=>{
    this.setState({
        isSubscribe:!this.state.isSubscribe
    })
}
render(){
    return(
        <>
        <button  onClick={this.handleSubscribe} >
            {
                this.state.isSubscribe ? "UnSuscribe": "Subscribe"
            }
           </button>
        {
             this.state.isSubscribe 
             ?
             <>
               {/* <button onClick={this.sortList} >Sort</button> */}
            {
                this.state.employe.map(eachObject=><div>
                    <h4>{eachObject.profession}</h4>
                    <h4>{eachObject.id}</h4>
                </div>)
            }
            </>
            :
            <Dnaspinner/>




            // <h4>please subscribe</h4>

        }
        
        
        </>
    )

}
}
export default Counter;