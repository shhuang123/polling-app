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
    myOption: 'Sushi',
    votes: 0
  },
  {
    id: 2,
    myOption: 'Buger',
    votes: 0
  },
  {
    id: 3,
    myOption: 'Hot Pot',
    votes: 0
  },
  {
    id: 4,
    myOption: 'Salad',
    votes: 0
  },
]

class App extends Component {
  constructor() {
    super();
    this.state = {
      myOptions: [],
      chartData: {},
    };
  }

  componentDidMount () {
    this.setState({
      myOptions: list
    });
  }

  componentWillMount() {
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{
        labels: ['Sushi', 'Burger', 'Hot Pot', 'Salad'],
        datasets: [
          {
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
            borderWidth: 1,
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

  Vote = myOptionsId => {
    const updatedList = this.state.myOptions.map(myOptions => {
      if (myOptions.id === myOptionsId) {
        return Object.assign({}, myOptions, {
          votes: myOptions.votes + 1
        });
      }
      else {
        return myOptions;
      }
    });

    this.setState({
      myOptions: updatedList
    });
  };

  render() {
    return this.state.myOptions.map((myOptions) =>

      <div className="App" key={myOptions.id}>
      <Nav />
      <Form />
      <Vote
        id={myOptions.id}
        myOption={myOptions.myOption}
        votes={myOptions.votes}
        onVote={this.Vote}
      />
      <Chart
        chartData={this.state.chartData}
      />
      </div>
    );
  }
}

export default App;
