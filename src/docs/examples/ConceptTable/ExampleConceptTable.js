import React, { Component } from 'react';
import ConceptTable from 'components-app/ConceptTable/ConceptTable';


/** Renders a table based on concepts */
export default class ExampleConceptTable extends Component{
  render() {

    return <ConceptTable width={800} 
    height={250} 
    headerWidth={50} 
    rowHeight={50} 
    data={[{ id: 1, name: "Anna", debt: 200000, lastActivityDate: "6th June 2017" },
     { id: 2, name: "Hugo", debt: 550000, lastActivityDate: "6th June 2017" },
     { id: 3, name: "Louis", debt: 130000, lastActivityDate: "6th June 2017" }]} />;}
}
