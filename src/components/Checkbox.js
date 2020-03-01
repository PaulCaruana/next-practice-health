import React from 'react';

export default function Checkbox(props) {
    const {name, label, inputRef} = props;


    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input name={name} type="checkbox" ref={inputRef} />
        </div>
    );
}
