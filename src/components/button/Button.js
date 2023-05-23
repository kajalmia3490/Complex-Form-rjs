import './Button.css'
import React from 'react';

const Button = (props) => {
    return (
        <div>
            <input
                className={props.className}
                type={props.type}
                name={props.name}
                value={props.value}
            />
        </div>
    );
};

export default Button;