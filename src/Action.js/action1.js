import { connect } from 'react-redux';
//import { Component } from './component';

const mapStateToProps = state => {
  return {
    Data: state
  };
};
const mapDispatchToProps = dispatch => {
  return {
  
    handleSubmit: () => dispatch({ type: 'submit' })
  }
};
export const Container = connect(mapStateToProps, mapDispatchToProps)(Component);