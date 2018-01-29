import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { Column, Table } from 'react-virtualized';
import 'react-virtualized/styles.css'; // only needs to be imported once
import styled from "styled-components";
import { responsiveStyle } from "styled-system";


const TableStyle = styled.table`
  text-align: center;
`;

export default class ConceptTable extends PureComponent {

/** Renders a table based on concepts */
// TODO: At the moment is hardcoded but it will be dynamic
render(){
  return <Table width={this.props.width} height={this.props.height} headerHeight={this.props.headerWidth} rowHeight={this.props.rowHeight} rowCount={this.props.data.length} rowGetter={({ index }) => this.props.data[index]}>
      <Column width={this.props.width / 3} label="Name" dataKey="name" />
      <Column width={this.props.width / 3} label="Debt" dataKey="debt" />
      <Column width={this.props.width / 3} label="Last Activity Date" dataKey="lastActivityDate" />
    </Table>;
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
  data : PropTypes.array.isRequired,
};

ConceptTable.defaultProps={
  width: 400,
  height : 400,
  headerWidth:20,
  rowHeight : 30,
  data : []
};
