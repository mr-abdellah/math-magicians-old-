import { useState } from 'react';
import '../styles/ui.css';
import calculate from '../logic/calculate';

// eslint-disable-next-line react/prefer-stateless-function
const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: 0 });

  function handleInputChange(e) {
    setState({
      next: e.target.value,
    });
  }

  function handleClick(e) {
    const target = e.target.innerHTML;
    const calculation = calculate(state, target);

    setState(calculation);
  }
  return (
    <div className="calculator">
      <input type="number" id="calculator-input" placeholder="0" onChange={handleInputChange} value={state.next || state.total || ''} />

      <button className="btn" type="submit" onClick={handleClick}>AC</button>
      <button className="btn" type="submit" onClick={handleClick}>+/-</button>
      <button className="btn" type="submit" onClick={handleClick}>%</button>
      <button className="btn" id="orange" type="submit" onClick={handleClick}>÷</button>

      <button className="btn" type="submit" onClick={handleClick}>7</button>
      <button className="btn" type="submit" onClick={handleClick}>8</button>
      <button className="btn" type="submit" onClick={handleClick}>9</button>
      <button className="btn" id="orange" type="submit" onClick={handleClick}>x</button>

      <button className="btn" type="submit" onClick={handleClick}>4</button>
      <button className="btn" type="submit" onClick={handleClick}>5</button>
      <button className="btn" type="submit" onClick={handleClick}>6</button>
      <button className="btn" id="orange" type="submit" onClick={handleClick}>-</button>

      <button className="btn" type="submit" onClick={handleClick}>1</button>
      <button className="btn" type="submit" onClick={handleClick}>2</button>
      <button className="btn" type="submit" onClick={handleClick}>3</button>
      <button className="btn" id="orange" type="submit" onClick={handleClick}>+</button>

      <button className="btn" type="submit" onClick={handleClick} id="zero">0</button>
      <button className="btn" type="submit" onClick={handleClick}>.</button>
      <button className="btn" id="orange" type="submit" onClick={handleClick}>=</button>

    </div>
  );
};
export default Calculator;
