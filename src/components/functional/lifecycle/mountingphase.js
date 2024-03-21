import axios from "axios";
import React, { Component } from "react";
import Dnaspinner from "../spinner/dna";






class MountingPhase extends Component{
    constructor(){
        console.log("constructor")
        super()
        this.state={
            message:"Good morning",
            users:[]
        }
    }

    componentDidMount(){
        //it will execute only once in a life cycle 
        console.log("component did mount")
       axios.get("https://dummyjson.com/users")
       .then(response=>{
        this.setState({
            users:response.data.users
        })
       })    

       }
    

    render(){
        console.log("render")
        return(
            <>
            <h3>hello world</h3>
            {
         this.state.users.length>0
         ?

                this.state.users.map(eachObject=>{
                    return(
                        <React.Fragment key={eachObject.id} >
                        <h3>{eachObject.firstName}</h3>
                        </React.Fragment>
                    )
                })
                :
                <>

            <Dnaspinner/>
            <h1>Please data fetching</h1>
            </>
            }

              
            </>
        )
    }
        
  
}
export default MountingPhase