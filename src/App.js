import React, { Component } from 'react';
import './App.css';
import TableContainer from "./components/TableContainer/TableContainer";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as conceptActions from './actions/conceptActions';
import PropTypes from 'prop-types';



class App extends Component {

  constructor(props) {

      super(props);
      if(this.props.concepts.length >0)
      {
       this.state ={
         concepts: Object.assign({},this.props.concepts),
         errors: {}
       };
      }
    }

  render() {
     console.log(this.props.concepts);
     let myComponent=null;
     if (this.props.concepts) {
       myComponent = <TableContainer data={this.props.concepts} />;
     }
    return <div>{myComponent}</div>;
  }
}


App.propTypes={
  concepts: PropTypes.array.isRequired,
  actions : PropTypes.object.isRequired
};


//-------------------------------------------------------------------
//Redux connect section
//-------------------------------------------------------------------
function mapStateToProps(state) {
  return {concepts: state.concepts};
}


function mapDispatchToProps (dispatch)
{
  return {
    actions: bindActionCreators(conceptActions,dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
