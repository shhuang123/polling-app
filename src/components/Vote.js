import React, { Component } from 'react';


class Vote extends Component {
  
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
    <div className="Vote">
      <h1>{this.props.question}</h1>
      <button onClick={this.handleClick}> {this.props.myOption} </button>
      {this.props.votes}
    </div>
    );
  }
}

export default Vote;
