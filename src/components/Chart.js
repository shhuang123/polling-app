import React from 'react'
import { Bar } from 'react-chartjs-2'

export default class Chart extends React.Component {
  render () {
    return (
      <Bar
        data={votes(this.props.questions)}
        width={50}
        height={100}
        options={options}
        />
    )
  }
}
