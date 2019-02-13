import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import OperateButtons from './components/ButtonComponents/OperateButtons';



const App = () => {
  return (

    <div className ="calc-container">
    <div className="display-row">
    <CalculatorDisplay totalDisplayStyle="total"/>
    </div>
    <div className="numbers">
      <ActionButton text="clear"/>
      <NumberButton buttonStyle="number-button" text="1"/>
      <NumberButton buttonStyle="number-button" text="2"/>
      <NumberButton buttonStyle="number-button" text="3"/>
      <NumberButton buttonStyle="number-button" text="4"/>
      <NumberButton buttonStyle="number-button" text="5"/>
      <NumberButton buttonStyle="number-button" text="6"/>
      <NumberButton buttonStyle="number-button" text="7"/>
      <NumberButton buttonStyle="number-button" text="8"/>
      <NumberButton buttonStyle="number-button" text="9"/>
      <ActionButton text ="0"/>
    </div>
    <div className="operators">
    <OperateButtons buttonStyle="operateIt" text="/" />
    <OperateButtons buttonStyle="operateIt" text="X" />
    <OperateButtons buttonStyle="operateIt" text="-" />
    <OperateButtons buttonStyle="operateIt" text="+" />
    <OperateButtons buttonStyle="operateIt" text="=" />
    </div>
    
    </div>
  );
};

export default App;
