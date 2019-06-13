import React, { Component } from 'react';
import './App.css';
import axios from 'axios';


const list = [
  {
    id: 1,
    question: 'I love sushi',
    votes: 0
  },
  {
    id: 2,
    question: 'Give me lot of wasabii',
    votes: 0
  },
  {
    id: 3,
    question: 'Dragon roll.. meh',
    votes: 0
  },
  {
    id: 4,
    question: 'Give me Super Duper',
    votes: 0
  },
]

class App extends Component {
  state = {
    questions: []
  };



  componentDidMount () {
    this.setState({ questions: list });
  }

  handleEvent = questionsId => {
    const updatedList = this.state.questions.map(questions => {
      if (questions.id === questionsId) {
        return Object.assign({}, questions, {
          votes: questions.votes + 1
        });
      }
      else {
        return questions;
      }
    });

    this.setState({
      questions: updatedList
    });
  };

  render() {
    return this.state.questions.map(questions =>
      <Ask
        key={questions.id}
        id={questions.id}
        question={questions.question}
        votes={questions.votes}
        onVote={this.handleEvent}
      />
    );
  }
}

class Ask extends Component {
  handleClick = () => this.props.onVote(this.props.id);

  render() {
    return (
    <div className="App">
      {this.props.question} <button onClick={this.handleClick}>+</button>
      {this.props.votes}
    </div>
    );
  }
}

export default App;
