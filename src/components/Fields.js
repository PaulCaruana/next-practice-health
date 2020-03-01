import React from "react";
import Text from "./Text";
import DatePicker from "./Date";
import RadioButtons from "./Options";
import Checkbox from "./Checkbox";

const components = {
    text: Text,
    string: Text,
    date: DatePicker,
    enum: RadioButtons,
    boolean: Checkbox
}

export const validatorTypes = {
    required: ({title}) => {
        return {required: `${title} must be entered`}
    },
    containsASpace: ({title}) => {
        return {
            validate: filedValue => {
                if (filedValue === "" || !filedValue) {
                    return true;
                }
                const parts = filedValue.trim().split(" ");
                return parts.length > 1;
            }
        }
    },
    ageFromDate: ({title}, value) => {
        return {
            validate: fieldValue => {
                if (fieldValue === "" || !fieldValue) {
                    return true;
                }
                const today = new Date();
                const enteredDate = new Date(fieldValue);
                let age = today.getFullYear() - enteredDate.getFullYear();
                const m = today.getMonth() - enteredDate.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < enteredDate.getDate())) {
                    age--;
                }
                return age >= parseInt(value);
            }
        }
    }
}

const Fields = ({fields, properties, onChange, errors, watch, register}) => {
    const Flds = [];
    let Fld;
    for (const key in fields) {
        const field = fields[key];
        const property = properties[key];
        const uiType = field.type || property.type || "text";
        const Component = components[uiType];
        const title = field.title || property.title
        const values = property.values;
        const defaultErrorMsg = field.defaultErrorMsg
        const whenId = field.when;
        if (whenId) {
            const when = watch(whenId);
            if (!when) {
                continue;
            }
        }
        const attrs = {
            name: key,
            title: title,
            values: values,
            placeholder: field.placeholder,
            errors: errors
        };
        const validators = {};
        field.validators = field.validators || {};
        for (const key in field.validators) {
            const value = field.validators[key];
            const validator = validatorTypes[key];
            const valTypes = validator(attrs, value);
            for (const valType in valTypes) {
                validators[valType] = valTypes[valType]
            }
        }
        attrs.validators = validators;
        const error =  errors && errors[key];
        if (error && error.message === "") {
            error.message = defaultErrorMsg;
        }
        Fld = <Field Component={Component} attrs={attrs} onChange={onChange} register={register}/>
        Flds.push(Fld)
    }
    return (
        <div>
            {Flds.map((item, i) => <div key={i}>{item}</div>)}
        </div>
    )
}

function Field({Component, attrs, onChange, register}) {
    const {name, title, placeholder, validators, values, errors} = attrs;
    return (
        <div>
            <Component
                name={name}
                onChange={onChange}
                label={title}
                placeholder={placeholder}
                values={values}
                fullWidth
                inputRef={register(validators)}
                errors={errors}
            />
        </div>
    )
}

export default Fields;