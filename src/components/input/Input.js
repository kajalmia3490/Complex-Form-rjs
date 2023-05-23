import './Input.css'
import React from 'react';

const Input = (props) => {
    return (
        <div className='input-container'>
            <label className='label' htmlFor={props.name}>
                {props.label}
            </label> <br />
            <input
                className='input'
                name={props.name}
                value={props.value}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
            />
        </div>
    );
};

export default Input;