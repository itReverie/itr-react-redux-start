import React, { Component } from "react";
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

export default class ConceptTableR extends Component {
                 /** Renders a table based on concepts */
                 render() {
                   return <StyledReactTable data={this.props.table.data} columns={this.props.table.columns} defaultPageSize={10} className="-striped -highlight" showPaginationBottom={true} />;
                 }
               }

ConceptTableR.propTypes = {
  /** information to render on the table */
  table: PropTypes.object.isRequired
};

ConceptTableR.defaultProps = {
    table: {}
};

