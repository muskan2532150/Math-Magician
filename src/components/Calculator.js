import { useState } from 'react';
import calculate from './logic/Calculate';

function Calculator() {
  const [state, setstate] = useState({ total: '0', next: null, operation: null });

  const clicked = (e) => {
    const result = calculate({ ...state }, e.target.textContent);
    setstate(result);
  };
  return (
    <div id="calculate">
      <div>
        <h5>The is Calculator Component</h5>
        <h5>Try it and Enjoy</h5>
      </div>
      <div className="part-two">
        <div className="text-show">
          {state.total}
          {' '}
          {state.operation}
          {' '}
          {state.next}
          {' '}
        </div>
        <div className="button-con">
          <div><button type="button" onClick={clicked}>AC</button></div>
          <div><button type="button" onClick={clicked}>+/-</button></div>
          <div><button type="button" onClick={clicked}>%</button></div>
          <div><button type="button" onClick={clicked} className="button-color">÷</button></div>
          <div><button type="button" onClick={clicked}>7</button></div>
          <div><button type="button" onClick={clicked}>8</button></div>
          <div><button type="button" onClick={clicked}>9</button></div>
          <div><button type="button" onClick={clicked} className="button-color">x</button></div>
          <div><button type="button" onClick={clicked}>4</button></div>
          <div><button type="button" onClick={clicked}>5</button></div>
          <div><button type="button" onClick={clicked}>6</button></div>
          <div><button type="button" onClick={clicked} className="button-color">-</button></div>
          <div><button type="button" onClick={clicked}>1</button></div>
          <div><button type="button" onClick={clicked}>2</button></div>
          <div><button type="button" onClick={clicked}>3</button></div>
          <div><button type="button" onClick={clicked} className="button-color">+</button></div>
          <div><button type="button" onClick={clicked}>0</button></div>
          <div><button type="button" onClick={clicked}>.</button></div>
          <div><button type="button" onClick={clicked} className="button-color">=</button></div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
