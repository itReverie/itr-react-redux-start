import React, { PureComponent } from 'react';
import './App.css';
import ConceptTable from './components/ConceptTable/ConceptTable';
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
    return (
      <div>
      <ConceptTable data={this.props.concepts}/>
      </div>
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
