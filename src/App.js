import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Vote from './components/Vote';
import Chart from './components/Chart';
import Form from './components/Form';

//import Button from './components/Button';
//const list = [ Sushi, Burger, Hot Pot, Salad]
const list = [
  {
    id: 1,
    question: 'What is your favorite food?',
    avotes: 0,
    bvotes: 0,
    cvotes: 0,
    dvotes: 0
  }
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      showForm: false,
      questions: [],
      //places
      //vote for each one
      
    };
  }

  toggleForm = () => {
    this.setState({
      showForm: ! this.state.showForm
    });
  }

  componentDidMount () {
    this.setState({ questions: list });
  }

  aVote = questionsId => {
    const updatedList = this.state.questions.map(questions => {
      if (questions.id === questionsId) {
        return Object.assign({}, questions, {
          avotes: questions.avotes + 1
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

  bVote = questionsId => {
    const updatedList = this.state.questions.map(questions => {
      if (questions.id === questionsId) {
        return Object.assign({}, questions, {
          bvotes: questions.bvotes + 1
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

  cVote = questionsId => {
    const updatedList = this.state.questions.map(questions => {
      if (questions.id === questionsId) {
        return Object.assign({}, questions, {
          cvotes: questions.cvotes + 1
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

  dVote = questionsId => {
    const updatedList = this.state.questions.map(questions => {
      if (questions.id === questionsId) {
        return Object.assign({}, questions, {
          dvotes: questions.dvotes + 1
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
    const { showForm } = this.state;

    return this.state.questions.map(questions =>
      <div className="App">
      <Nav toggleForm={this.toggleForm} showForm={showForm} />
      { showForm ? <Form /> :

      <Vote
        key={questions.id}
        id={questions.id}
        question={questions.question}
        avotes={questions.avotes}
        bvotes={questions.bvotes}
        cvotes={questions.cvotes}
        dvotes={questions.dvotes}
        aVote={this.aVote}
        bVote={this.bVote}
        cVote={this.cVote}
        dVote={this.dVote}
      />
      }
      <Chart
        legendPosition='bottom'
      />



      </div>
    );
  }
}

export default App;
