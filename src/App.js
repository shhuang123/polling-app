import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Chart from './components/Chart';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      choices: ['Burger', 'Sushi'],
      addition: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      addition: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => ({
      choices: [...prevState.choices, this.state.addition],
      addition: ''
    }))
  }

  // change code above this line
  render() {
    const { choices } = this.state
    let button = choices.map((i) => <Button key={i} name={i} />)

    return (

      <div>

        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type='text'
              placeholder='Add a Lunch Choice'
              value={this.state.addition}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" value="submit" className="form-control" />
        </form>
        {button}
      </div>
    );
  }
};

export default App;