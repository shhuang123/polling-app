import React, { Component } from 'react';

class Vote extends Component {
  aClick = () => this.props.aVote(this.props.id);
  bClick = () => this.props.bVote(this.props.id);
  cClick = () => this.props.cVote(this.props.id);
  dClick = () => this.props.dVote(this.props.id);

  render() {
    return (
    <div className="Vote">
      {this.props.question}
      <br />
      <button onClick={this.aClick}> Sushi </button>
      &nbsp;&nbsp;{this.props.avotes}&nbsp;&nbsp;
      <button onClick={this.bClick}> Burger </button>
      &nbsp;&nbsp;{this.props.bvotes}&nbsp;&nbsp;
      <button onClick={this.cClick}> Hot Pot </button>
      &nbsp;&nbsp;{this.props.cvotes}&nbsp;&nbsp;
      <button onClick={this.dClick}> Salad </button>
      &nbsp;&nbsp;{this.props.dvotes}&nbsp;&nbsp;
    </div>
    );
  }
}

export default Vote;
