import './Radio.css'
import React from 'react';

const Radio = (props) => {
    return (
        <div>
            <input
                className='radio'
                name={props.name}
                type={props.type}
                value={props.value}
                label={props.label}
            />
            <label htmlFor={props.name}>
                {props.label}
            </label>
        </div>
    );
};

export default Radio;