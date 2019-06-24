import React from 'react';

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        myQuestion: '',
    }
  }

  handleSubmit = (event) => {
      event.preventDefault()
      const data = this.state
      console.log(data)
    }

  handleQuestionChange = (event) => {
      event.preventDefault()
      this.setState({
        myQuestion: event.target.value
     })
  }

    render () {
      const {myQuestion} = this.state
      return (
        <div className='Form'>
          <h1>Question: {myQuestion}</h1>
          <form onSubmit={this.handleSubmit}>
            <p><input type='text'
                      placeholder='Create Question Here'
                      value={myQuestion}
                      question='myQuestion'
                      onChange={this.handleQuestionChange}/></p>
            <p><button>Submit Question</button></p>
          </form>
        </div>
      )
    }
  }

export default Form;
