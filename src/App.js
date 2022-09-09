import React from 'react';
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';

export default class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <Home />
        <Calculator />
      </>
    );
  }
}
