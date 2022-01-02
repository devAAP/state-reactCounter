import React from "react";

class classCounter extends React.Component {
    constructor() {
      super();
      this.state = {number: 0};
    }
  
    handleIncrease = () => {
      this.setState({number:this.state.number + 2});
    };
  
    handleDecrease = () => {
      this.setState({number:this.state.number - 2});
  
    }
  
    render() {
      return (
        <div className = 'ClassCounter'>
          <h1>{this.state.number}</h1>
          <button onClick = {this.handleIncrease}>Increase</button>
          <button onClick = {this.handleDecrease}>Decrease</button>
        </div>
      )
    }
  }

  export default classCounter;