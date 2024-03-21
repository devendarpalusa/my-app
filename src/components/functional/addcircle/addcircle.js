import { Component } from "react";
import "./circle.css"
class AddCircle extends Component {
  constructor() {
    super();
    this.state = {
      circles: [true]
    };
  }

  AddCircle = () => {
    let newState = [...this.state.circles, false];

    this.setState({ circles: newState });
  };

   changeColor=(index)=>{
    let newState = [...this.state.circles];
    newState[index]=!newState[index]
    this.setState({
      circles:newState
    })
   }

   DeleteCircle=(index)=>{  
    let newState = [...this.state.circles] 
newState.pop()
    this.setState({
     circles:newState

    })
    
  }


  
  render(){
    return (
      <>
      <button onClick={this.DeleteCircle}>Delete circle</button>
        <button onClick={this.AddCircle}>
          addCircle{this.state.circles.length}
        </button>
        {this.state.circles.length > 0 ? 
          this.state.circles.map((flag, index) => (
            <div
              key={index}
              className="circle"
              style={{ backgroundColor:this.state.circles[index]?"blue":"brown" }}
              onClick={() => this.changeColor(index)}
            ></div>
          ))
         : (
          <h2>no circles</h2>
        )}
      </>
    );
  }
}

export default AddCircle;
