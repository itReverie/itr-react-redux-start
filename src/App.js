import React, { PureComponent } from 'react';
import './App.css';
import TableContainer from "./components/TableContainer/TableContainer";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as conceptActions from './actions/conceptActions';
import PropTypes from 'prop-types';



class App extends PureComponent {

  constructor(props) {

      super(props);
       this.state ={
         concepts: Object.assign({},this.props.concepts),
         errors: {}
       };
    }

  render() {
     console.log(this.props.concepts);
    return (
       <TableContainer data={this.props.concepts} />
    )
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
