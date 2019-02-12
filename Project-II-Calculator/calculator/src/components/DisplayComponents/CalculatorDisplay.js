import React from 'react';
import './Display.css';
import NumberButton from './components/ButtonComponents/NumberButton';

function CalculatorDisplay (){
    return(
        <div className="calcContainer">
        <NumberButton />
        </div>
    );
}

export default CalculatorDisplay;
