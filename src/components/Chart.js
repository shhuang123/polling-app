import React from 'react'
import { Bar } from 'react-chartjs-2'

class Chart extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegent: true,
    legendPosition:'left'
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
