import React, { Component } from 'react';

class Vote extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
    <div className="Vote">
      <button onClick={this.handleClick}> {this.props.question} </button>
      {this.props.votes}
    </div>
    );
  }
}

export default Vote;
