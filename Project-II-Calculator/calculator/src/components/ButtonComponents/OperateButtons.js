import React from 'react';
import './Button.css';

const OperateButtons = props =>{
    return(
        <div className="operate-button">
        <button className={props.buttonStyle}>{props.text}</button>
        </div>
    );
}

export default OperateButtons;