import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2'

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegent: false,
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







    <Bar
      data={chartData}
      options={{
        maintainAspectRatio: true,
        title:{
          display:this.props.displayTitle,
          text:'Results',
          fontSize:18
        },
        legend:{
          display: true,
          position:'left'
        },
        layout: {
          padding: {
              left: 50,
              right: 50,
              top: 50,
              bottom: 50
          }
        }
      }}
    />
