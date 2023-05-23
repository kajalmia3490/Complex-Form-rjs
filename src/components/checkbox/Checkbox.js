import './Checkbox.css'
import React from 'react';

const Checkbox = (props) => {
    return (
        <div>
            <input
                name={props.name}
                type={props.type}
                value={props.value}
            />
            <label htmlFor={props.name}>
                {props.label}
            </label>
        </div>
    );
};

export default Checkbox;