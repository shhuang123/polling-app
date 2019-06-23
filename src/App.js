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
    question: 'Sushi',
    votes: 0
  },
  {
    id: 2,
    question: 'Buger',
    votes: 0
  },
  {
    id: 3,
    question: 'Hot Pot',
    votes: 0
  },
  {
    id: 4,
    question: 'Salad',
    votes: 0
  },
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      chartData: {},

      //places
      //vote for each one
    };
  }

  componentDidMount () {
    this.setState({
      questions: list
    });
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: ['Sushi', 'Burger', 'Hot Pot', 'Salad'],
        datasets: [
          {
            label:'Votes',
            data: [25, 180, 35, 232],
            backgroundColor: [
              'rgba(255,99,132,0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 206, 86, 0.2)',
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 206, 86, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1.5,
            hoverBackgroundColor: [
              'rgba(255,99,132,0.4)',
              'rgba(54, 162, 235, 0.4)',
              'rgba(75, 206, 86, 0.4)',
              'rgba(153, 102, 255, 0.4)',
            ]
          }
        ]
      }
    });
  }

  Vote = questionsId => {
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

      <div className="App">
      <Nav />
      <Form />
      <Vote
        key={questions.id}
        id={questions.id}
        question={questions.question}
        votes={questions.votes}
        onVote={this.Vote}
      />
      <Chart
        chartData={this.state.chartData}
        legendPosition='bottom'
      />
      </div>
    );
  }
}

export default App;
