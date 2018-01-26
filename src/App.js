import React, { Component } from 'react';
import './App.css';
import ConceptTable from './components/ConceptTable/ConceptTable';



class App extends Component {


  render() {

    // Table data as an array of objects
    const list = [
      { name: 'Anna', debt: 200000},
      { name: 'Hugo', debt: 550000},
      { name: 'Louis', debt: 130000}
    ];

    return (
      <div className="App">
      <ConceptTable data={list}/>
      </div>
    )
  }
}

export default App;
