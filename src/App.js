import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Home />
      <Calculator />
    </>
    )
  }
}

export default App;
