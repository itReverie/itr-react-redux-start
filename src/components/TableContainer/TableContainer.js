import React, { PureComponent } from "react";
import PropTypes from 'prop-types';
import styled from "styled-components";
import { responsiveStyle } from 'styled-system';
import ConceptTable from "../ConceptTable/ConceptTable";


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
  text-align: center;
  color: palevioletred;
`;

/** Container of a table so it manages the diplay in different sizes */
export default class TableContainer extends PureComponent {
                 constructor(props) {
                   super(props);
                   this.state = { width: 0, height: 0 };
                   this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
                 }

                 componentDidMount() {
                   this.updateWindowDimensions();
                   window.addEventListener("resize", this.updateWindowDimensions);
                 }

                 componentWillUnmount() {
                   window.removeEventListener("resize", this.updateWindowDimensions);
                 }

                 updateWindowDimensions() {
                   this.setState({
                     width: window.innerWidth,
                     height: window.innerHeight
                   });
                 }

                 render() {
                   return <Flex direction={["column"]}>
                       <Title>{this.props.title}</Title>
                       <ConceptTable data={this.props.data} width={this.state.width} height={this.state.height/2} />
                       <div>Graph</div>
                     </Flex>;
                 }
               }

 TableContainer.propTypes = { 
     /** information to render on the table */
   data: PropTypes.array.isRequired,
    /** title for the information on the table */
   title: PropTypes.string.isRequired
 };