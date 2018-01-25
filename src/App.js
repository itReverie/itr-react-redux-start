import React, { Component } from 'react';
import './App.css';
//import Docs from './docs/Docs';
//<Docs />
import Container from './components/Container/Container';
//<Container />

class App extends Component {
  render() {
    return (
      <div className="App" style={ {"margin":"100px"}}>
      <Container />
      </div>
    );
  }
}

export default App;
