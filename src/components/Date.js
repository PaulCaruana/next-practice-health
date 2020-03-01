import React from 'react';
import TextField from '@material-ui/core/TextField';

function Date(props) {
    const {name, label, onChange, placeholder, inputRef, errors} = props;
    const error =  errors && errors[name];
    const showError = (error)? true : false;
    const errorMsg = error && error.message;

    return (
        <div>
            <TextField
                name={name}
                label={label}
                type={"date"}
                placeholder={placeholder}
                onChange={onChange}
                inputRef={inputRef}
                InputLabelProps={{
                    shrink: true,
                }}
                helperText={errorMsg}
                error={showError}
            />
        </div>
    )
}
export default Date;
