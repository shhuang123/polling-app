import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Chart from './components/Chart';
import Display from './components/Display'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get('https://sharon-final-project.herokuapp.com/db')
      .then(response => {
        this.setState(prevState => ({
          data: [...prevState.data, response.data.choices]
        }))
        console.log(this.state.data[0]);
      })
      .catch(error => console.log('error', error))
  }

  // change code above this line
  render() {

    return (

      <Display selections={this.state.data[0]}/>
    );
  }
};

export default App;