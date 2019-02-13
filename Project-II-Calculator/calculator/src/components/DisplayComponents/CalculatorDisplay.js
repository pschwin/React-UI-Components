import React from 'react';
import './Display.css';


const CalculatorDisplay = props =>{
    return(
        <div className={props.totalDisplayStyle}>
        <h2>Total</h2>
        </div>
    );
}

export default CalculatorDisplay;
