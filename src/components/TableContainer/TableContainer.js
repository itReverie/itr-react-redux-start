import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { responsiveStyle } from 'styled-system';
import ConceptTableR from "../ConceptTable/ConceptTableR";
import ConceptTable from "../ConceptTable/ConceptTable";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as conceptActions from "../../actions/conceptActions";


const flexDirection = responsiveStyle({
  prop: 'direction',
  cssProperty: 'flexDirection'
})

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  ${flexDirection};
`;
// Create a Title component that'll render an <h1> tag with some styles
//styled.h1 is a function that when call return a react component that renders and H1
// You can now call functions with `` and pass those arguments
const Title = styled.h1`
  font-size: 1.5em;
  color: palevioletred;
`;


/** Container of a table so it manages the diplay in different sizes */
class TableContainer extends PureComponent {
  // constructor(props) {
  //   super(props);
  //   console.log("constructor ", this.props.concepts.length);
  //   if(this.props.concepts.length >0)
  //     {
  //   this.state = {
  //     concepts: this.props.concepts,
  //     errors: {}
  //   };
  // }
  // }

  render() {
    console.log(this.props.concepts);
     if(this.props.concepts.table != null)
      {
        console.log("Render ", this.props.concepts);
    return <Flex direction={["column"]}>
        <Title>{this.props.concepts.table}</Title>
        <br />
        <ConceptTableR table={this.props.concepts} />
        <br />
        <ConceptTable width={800} height={600} headerWidth={80} rowHeight={30} table={this.props.concepts} />
      </Flex>;
  }
  else{return <div />}
  }
}

 TableContainer.propTypes = { 
   /** information to render on the table */
   concepts: PropTypes.object.isRequired, 
   actions: PropTypes.object.isRequired };



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

export default connect(mapStateToProps, mapDispatchToProps)(TableContainer);
