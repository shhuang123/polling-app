import React from 'react';
import Button from './Button'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      choices: ['Sushi', 'Burger'],
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

    render () {
      const { choices } = this.state
      console.log(choices);
      let button = choices.map((i) => <Button key={i} name={i} />)
      return (
        <div>
        {this.props.selections}
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
      )
    }
  }

export default Form;
