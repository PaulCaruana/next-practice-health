import React from 'react';

export default function RadioButtons(props) {
    const {name, label, onChange, placeholder, defaultMsg, values, inputRef, errors} = props;
    const error =  errors && errors[name];
    const showError = (error)? true : false;
    const errorMsg = error && error.message;
    const valueKeys = Object.keys(values);


    return (
        <div>
            <label>{label}</label>
            {valueKeys.map((key, i) => <span key={key}><span>{values[key]}</span><input name={name} type="radio" value={key} ref={inputRef} /></span>)}
        </div>
    );
}
