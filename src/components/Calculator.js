import { Component } from 'react';
import '../styles/ui.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      next: event.target.value,
    });
  }

  handleClick(event) {
    const target = event.target.innerHTML;
    const calculation = calculate(this.state, target);

    this.setState(calculation);
  }

  render() {
    const { total, next } = this.state;
    return (
      <div className="calculator">
        <input type="number" id="calculator-input" placeholder="0" onChange={this.handleInputChange} value={next || total || ''} />
        <button className="btn" type="submit" onClick={this.handleClick}>AC</button>
        <button className="btn" type="submit" onClick={this.handleClick}>+/-</button>
        <button className="btn" type="submit" onClick={this.handleClick}>%</button>
        <button className="btn" id="orange" type="submit" onClick={this.handleClick}>÷</button>
        <button className="btn" type="submit" onClick={this.handleClick}>7</button>
        <button className="btn" type="submit" onClick={this.handleClick}>8</button>
        <button className="btn" type="submit" onClick={this.handleClick}>9</button>
        <button className="btn" id="orange" type="submit" onClick={this.handleClick}>X</button>
        <button className="btn" type="submit" onClick={this.handleClick}>4</button>
        <button className="btn" type="submit" onClick={this.handleClick}>5</button>
        <button className="btn" type="submit" onClick={this.handleClick}>6</button>
        <button className="btn" id="orange" type="submit" onClick={this.handleClick}>-</button>
        <button className="btn" type="submit" onClick={this.handleClick}>1</button>
        <button className="btn" type="submit" onClick={this.handleClick}>2</button>
        <button className="btn" type="submit" onClick={this.handleClick}>3</button>
        <button className="btn" id="orange" type="submit" onClick={this.handleClick}>+</button>
        <button className="btn" type="submit" onClick={this.handleClick} id="zero">0</button>
        <button className="btn" type="submit" onClick={this.handleClick}>.</button>
        <button className="btn" id="orange" type="submit" onClick={this.handleClick}>=</button>
      </div>
    );
  }
}
export default Calculator;
