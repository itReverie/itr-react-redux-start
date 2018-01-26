import React, { Component } from 'react';
import ConceptTable from 'components-app/ConceptTable/ConceptTable';


/** Renders a table based on the concepts */
export default class ExampleConceptTable extends Component{
  render() {

    return (
            <ConceptTable
            width= {180}
            height= {100}
            headerWidth= {50}
            rowHeight= {50}
             data={[
              { id:1, name: 'Anna', debt: 200000},
              { id:2, name: 'Hugo', debt: 550000},
              { id:3, name: 'Louis', debt: 130000}
            ]}/>
            )}
}