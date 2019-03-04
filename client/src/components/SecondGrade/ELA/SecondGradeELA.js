import React from "react";

import DoughnutChart from "../../../containers/Charts/DoughnutChart";
const SecondGradeELA = props => (
  <div className="container" style={{ textAlign: "center" }}>
    <h1>Second Grade ELA Data</h1>
    <div style={{ float: "left" }}>
      <h3>September</h3>
      <DoughnutChart
        data={props.data}
        meeting={11}
        farBelow={4}
        testType={"september_scores"}
      />
    </div>
    <div style={{ float: "right" }}>
      <h3>December</h3>
      <DoughnutChart
        data={props.data}
        meeting={12}
        farBelow={6}
        testType={"december_scores"}
      />
    </div>
  </div>
);
export default SecondGradeELA;
