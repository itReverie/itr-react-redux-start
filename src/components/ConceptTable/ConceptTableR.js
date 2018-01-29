import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


const StyledTable = styled(ReactTable)`
  display: flex;
  text-align: center;
  flex-direction: row;
  @media (min-width: 900px) {
    flex-direction: column;
  }
`;

export default class ConceptTableR extends PureComponent {
  /** Renders a table based on concepts */
  // TODO: At the moment is hardcoded but it will be dynamic
  render() {
  return <ReactTable data={this.props.data}  style={{width:'80%'}}
  columns={[{ Header: "First Name", id: "name", accessor: "name" }, 
  { Header: "Debt", id: "debt", accessor: "debt" }, 
  { Header: "Last Activity Date", id: "lastActivityDate", accessor: "lastActivityDate" }]} 
  defaultPageSize={10} className="-striped -highlight" showPaginationBottom={true}/>;
  }
}

ConceptTableR.propTypes = {
  /** information to render on the table */
  data: PropTypes.array.isRequired,
  width: PropTypes.number
};

ConceptTableR.defaultProps = {
  data: []
};
