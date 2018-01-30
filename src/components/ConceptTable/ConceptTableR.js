import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";


const StyledReactTable = styled(ReactTable)`
  width: 80%;
  display: flex;
  text-align: center;
`;

export default class ConceptTableR extends PureComponent {
  
  /** Renders a table based on concepts */
  render() {
    const columns=[{ Header: "First Name", id: "name", accessor: "name" }, { Header: "Debt", id: "debt", accessor: "debt" }, { Header: "Last Activity Date", id: "lastActivityDate", accessor: "lastActivityDate" }];
    return <StyledReactTable data={this.props.data.data} columns={columns} defaultPageSize={10} className="-striped -highlight" showPaginationBottom={true} />;
  }
}

ConceptTableR.propTypes = {
  /** information to render on the table */
  data: PropTypes.array.isRequired
};

ConceptTableR.defaultProps = {
    data: null
};

