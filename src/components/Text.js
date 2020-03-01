import React from "react";
import TextField from "@material-ui/core/TextField";

function Text(props) {
    const {name, label, onChange, placeholder, defaultMsg, inputRef, errors} = props;
    const error =  errors && errors[name];
    const showError = (error)? true : false;
    const errorMsg = error && error.message;
    //console.log("PROPS", props)

    return (
        <div>
            <TextField
                name={name}
                label={label}
                placeholder={placeholder}
                onChange={onChange}
                inputRef={inputRef}
                helperText={errorMsg}
                error={showError}
            />
        </div>
    )
}

export default Text;