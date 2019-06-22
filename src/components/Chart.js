import React from 'react'
import { Bar } from 'react-chartjs-2'

class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
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
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegent: true,
    legendPosition:'right'
  }

  render(){
    return (
      <div className="chart">
      <Bar
        data={this.state.chartData}
        options={{
          maintainAspectRatio: true,
          title:{
            display:this.props.displayTitle,
            text:'Results',
            fontSize:18
          },
          legend:{
            display:this.props.displayLegent,
            position:this.props.legendPosition
          },
          layout: {
            padding: {
                left: 50,
                right: 50,
                top: 50,
                bottom: 0
            }
          }
        }}
      />
      </div>
    )
  }
}

export default Chart;
