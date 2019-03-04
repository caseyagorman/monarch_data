import React, { Component } from "react";
import * as dataActions from "../../../redux/actions/dataActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SecondGradeELA from "../../../components/SecondGrade/ELA/SecondGradeELA";

class SecondGradeELABOY extends Component {
  componentDidMount() {
    this.props.dataActions.fetchData();
  }

  displayChart(data) {
    console.log(data);
    if (!data) {
      return <div />;
    }
    return <SecondGradeELA data={data} />;
  }

  render() {
    return this.displayChart(this.props.data);
  }
}

function mapStateToProps(state) {
  return {
    data: state.data
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dataActions: bindActionCreators(dataActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondGradeELABOY);
