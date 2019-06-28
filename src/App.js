import React, { Component } from 'react';
import './App.css';
//import chart from Chart.js


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      "burger": 0,
      "salad": 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    const choices = this.state + 1;
    this.setState({
      choices: choices
    });
    console.log(this)
  }

  //
  // handleClick() {
  //   this.setState({
  //       choices: this.state.value + 1
  //     });
  //   console.log(this);
  // }

  render(){
    const choices = this.state;
    return (
      <div className="display">
        {Object.keys(choices).map((choice, i) => (
          <div>
            <button onClick={this.handleClick} key={choice} name={choice} value={choices}>{choice}</button>
          </div>
        ))}
      </div>
    )
  }

}

export default App;

// handleClick() {
//   this.setState({
//     burger: this.state.burger + 1,
//     salad: this.state.salad + 1
//   });
//   console.log(this)
// }

// handleClick = () => {
//   const {burger} = this.state
//   this.setState({burger: burger + 1});
// }
