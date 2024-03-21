import { Component, PureComponent } from "react";

class ParentComponent extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    };
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    console.log("parent rendering");
    return (
      <>
        <h2>hello</h2>
        <h2> counter{this.state.counter}</h2>
        <button onClick={this.increment}>increment</button>
        <ChildComponent/>
      </>
    );
  }
}

export default ParentComponent;

class ChildComponent extends PureComponent {
  render() {
    console.log("child rendering");

    return <h1>i am child</h1>;
  }
}
