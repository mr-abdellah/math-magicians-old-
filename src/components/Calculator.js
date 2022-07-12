import { Component } from 'react';
import '../styles/ui.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <input type="number" id="calculator-input" placeholder="0" />
        <button className="btn" type="submit">AC</button>
        <button className="btn" type="submit">+/-</button>
        <button className="btn" type="submit">%</button>
        <button className="btn" id="orange" type="submit">÷</button>
        <button className="btn" type="submit">7</button>
        <button className="btn" type="submit">8</button>
        <button className="btn" type="submit">9</button>
        <button className="btn" id="orange" type="submit">X</button>
        <button className="btn" type="submit">4</button>
        <button className="btn" type="submit">5</button>
        <button className="btn" type="submit">6</button>
        <button className="btn" id="orange" type="submit">-</button>
        <button className="btn" type="submit">1</button>
        <button className="btn" type="submit">2</button>
        <button className="btn" type="submit">3</button>
        <button className="btn" id="orange" type="submit">+</button>
        <button className="btn" type="submit" id="zero">0</button>
        <button className="btn" type="submit">.</button>
        <button className="btn" id="orange" type="submit">=</button>
      </div>
    );
  }
}
export default Calculator;
