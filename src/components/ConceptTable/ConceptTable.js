import React, {PureComponent} from 'react';
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



export default class ConceptTable extends PureComponent {

/** Renders a table based on concepts */
render(){
  console.log(this.props.table);

  return <StyledTable width={this.props.width} 
  height={this.props.height} 
  headerHeight={this.props.headerWidth} 
  rowHeight={this.props.rowHeight} 
  rowCount={this.props.table.data.length} rowGetter={({ index }) => this.props.table.data[index]}>
      {this.props.table.columns.map(column => (
        <Column
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
  width: 400,
  height: 400,
  headerWidth: 20,
  rowHeight: 30,
  table: {
    id: 1,
    name: "List of Borrowers",
    columns: [
      { Header: "First Name", id: "name", accessor: "name" },
      { Header: "Debt", id: "debt", accessor: "debt" },
      {
        Header: "Last Activity Date",
        id: "lastActivityDate",
        accessor: "lastActivityDate"
      }
    ],
    data: [
      {
        id: 1,
        name: "Steve Smith",
        debt: 200000,
        lastActivityDate: "6th June 2017"
      },
      {
        id: 2,
        name: "Damian Triviera",
        debt: 550000,
        lastActivityDate: "9th June 2017"
      },
      {
        id: 3,
        name: "Anna Johanson",
        debt: 130000,
        lastActivityDate: "16th June 2017"
      },
      {
        id: 4,
        name: "Olvia Taseski",
        debt: 200000,
        lastActivityDate: "26th June 2017"
      },
      {
        id: 5,
        name: "Luke Purvey",
        debt: 55000,
        lastActivityDate: "6th June 2017"
      },
      {
        id: 6,
        name: "Karla Ramirez",
        debt: 330000,
        lastActivityDate: "6th June 2017"
      },
      {
        id: 7,
        name: "Nic Robinson",
        debt: 20000,
        lastActivityDate: "6th June 2017"
      },
      {
        id: 8,
        name: "Adam Rackis",
        debt: 550200,
        lastActivityDate: "9th June 2017"
      },
      {
        id: 9,
        name: "Luke Wroblewski",
        debt: 130500,
        lastActivityDate: "16th June 2017"
      },
      {
        id: 10,
        name: "Dam Abramavov",
        debt: 120000,
        lastActivityDate: "26th June 2017"
      },
      {
        id: 10,
        name: "Catherine Gasson",
        debt: 75000,
        lastActivityDate: "6th June 2017"
      },
      {
        id: 12,
        name: "Meghan Miller",
        debt: 13000,
        lastActivityDate: "6th June 2017"
      }
    ]
  }
};
