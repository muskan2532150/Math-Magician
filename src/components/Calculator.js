import React, { Component } from 'react';
import calculate from './logic/Calculate';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = { total: '0', next: null, operation: null };
  }

  clicked = (e) => {
    const result = calculate({ ...this.state }, e.target.textContent);
    this.setState(result);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div id="calculate">
        <div>
          <h5>The is Calculator Component</h5>
          <h5>Try it and Enjoy</h5>
        </div>
        <div className="part-two">
          <div className="text-show">
            {total}
            {' '}
            {operation}
            {' '}
            {next}
            {' '}
          </div>
          <div className="button-con">
            <div><button type="button" onClick={this.clicked}>AC</button></div>
            <div><button type="button" onClick={this.clicked}>+/-</button></div>
            <div><button type="button" onClick={this.clicked}>%</button></div>
            <div><button type="button" onClick={this.clicked} className="button-color">÷</button></div>
            <div><button type="button" onClick={this.clicked}>7</button></div>
            <div><button type="button" onClick={this.clicked}>8</button></div>
            <div><button type="button" onClick={this.clicked}>9</button></div>
            <div><button type="button" onClick={this.clicked} className="button-color">x</button></div>
            <div><button type="button" onClick={this.clicked}>4</button></div>
            <div><button type="button" onClick={this.clicked}>5</button></div>
            <div><button type="button" onClick={this.clicked}>6</button></div>
            <div><button type="button" onClick={this.clicked} className="button-color">-</button></div>
            <div><button type="button" onClick={this.clicked}>1</button></div>
            <div><button type="button" onClick={this.clicked}>2</button></div>
            <div><button type="button" onClick={this.clicked}>3</button></div>
            <div><button type="button" onClick={this.clicked} className="button-color">+</button></div>
            <div><button type="button" onClick={this.clicked}>0</button></div>
            <div><button type="button" onClick={this.clicked}>.</button></div>
            <div><button type="button" onClick={this.clicked} className="button-color">=</button></div>
          </div>
        </div>
      </div>
    );
  }
}
