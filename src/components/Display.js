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
      let button = choices.map((i) => <Button key={i} name={i} />)//need to map the

      return (
        <div>
          <div className="question">What is your favorite food?</div>
        <br />
        {button}
        <form onSubmit={this.handleSubmit} className="left">
          <p>
            <input className="field"
              type='text'
              placeholder='Add More Choices'
              value={this.state.addition}
              onChange={this.handleChange}
            />
          </p>
          <input type="submit" value="submit" className="field-button" />
        </form>

        </div>
      )
    }
  }

export default Form;
