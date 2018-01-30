import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import styled from "styled-components"


const StyledTable = styled(Table)`
  display: flex;
  text-align: center;
  flex-direction: row;
  @media (min-width: 900px) {
    flex-direction: column;
  }
`;

export default class ConceptTable extends Component {
               
                 /** Renders a table based on concepts */
                 render() {
                   return <StyledTable width={this.props.width} height={this.props.height} headerHeight={this.props.headerWidth} rowHeight={this.props.rowHeight} rowCount={this.props.table.data.length} rowGetter={({ index }) => this.props.table.data[index]}>
                       {this.props.table.columns.map(column => (
                         <Column
                           id={column.accessor}
                           width={100}
                           label={column.accessor}
                           dataKey={column.accessor}
                         />
                       ))}
                     </StyledTable>;
                 }
               }

ConceptTable.propTypes={
  /** width of the table */
  width:PropTypes.number.isRequired,
  /** height of the table */
  height : PropTypes.number.isRequired,
  /** width of the header */
  headerWidth:PropTypes.number.isRequired,
  /** height of the row */
  rowHeight : PropTypes.number.isRequired,
  /** information to render on the table */
  table : PropTypes.object.isRequired,
};

ConceptTable.defaultProps = {
 table: {}
};
