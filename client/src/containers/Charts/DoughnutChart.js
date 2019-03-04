import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class DoughnutChart extends Component {
  formatArray(tooltipItem) {
    return " " + tooltipItem;
  }
  displayChart(dataResults, meeting, farBelow, testType) {
    console.log(testType);
    if (!dataResults) {
      return <div> </div>;
    }
    let meetingArr = [];
    let notMeetingArr = [];
    let farBelowArr = [];
    let scores = dataResults[testType];
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] >= meeting) {
        meetingArr.push(scores[i]);
      } else if (scores[i] <= farBelow) {
        farBelowArr.push(scores[i]);
      } else if (scores[i] > farBelow && scores[i] < meeting) {
        notMeetingArr.push(scores[i]);
      }
    }

    const data = {
      labels: ["meeting", "not meeting", "far below"],
      datasets: [
        {
          data: [meetingArr.length, notMeetingArr.length, farBelowArr.length],
          backgroundColor: ["green", "orange", "red"],
          hoverBackgroundColor: ["#018f75", "#FE6625", "red"]
        }
      ]
    };
    // let options = {
    //     tooltips: {
    //       callbacks: {
    //         label: function(tooltipItem) {
    //           const indice = tooltipItem.index;
    //           return tooltipData[indice];
    //         }
    //       }
    //     }
    // };
    return (
      <div className="doughnut-chart">
        <Doughnut height={500} width={500} data={data} />
      </div>
    );
  }
  render() {
    return this.displayChart(
      this.props.data,
      this.props.meeting,
      this.props.farBelow,
      this.props.testType
    );
  }
}

export default DoughnutChart;
