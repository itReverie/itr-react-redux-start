import React, { Component } from 'react';
import ConceptColumn from 'components-app/ConceptColumn';


/** Renders a table based on concepts */
export default class ExampleConceptColumn extends Component{
  
  render() {

    return (  <ConceptColumn name='Name' dataKey='name'/>
            )}
}
