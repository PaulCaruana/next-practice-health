import React from 'react';

export default function RadioButtons(props) {
    const {name, label, values, inputRef} = props;
    const valueKeys = Object.keys(values);

    return (
        <div>
            <label>{label}</label>
            {valueKeys.map((key, i) => <span key={key}><span>{values[key]}</span><input name={name} type="radio" value={key} ref={inputRef} /></span>)}
        </div>
    );
}
