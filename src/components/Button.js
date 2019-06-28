import React, { Component } from 'react';
import Chart from './Chart';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  this.increment = this.increment.bind(this)
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  };

  //Load a Chat.js Chart
  //pass data per state.count as an individual bar on the graph 

  render() {
    return (

   <div>
        <div className="row">
            <button className='inc' onClick={this.increment}>{this.props.name}!</button> Votes: {this.state.count}
        </div>
  </div>
    );
  }
};

export default Button;