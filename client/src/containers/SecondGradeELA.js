import React, { Component } from "react";
import * as dataActions from "../redux/actions/dataActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class SecondGradeELA extends Component {
  componentDidMount() {
    this.props.dataActions.fetchData();
  }
  render() {
    console.log(this.props);
    return <div />;
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
)(SecondGradeELA);
