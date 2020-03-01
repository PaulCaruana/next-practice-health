import React from "react";
import {useForm} from "react-hook-form";
import Fields from "./components/Fields";

import "./index.css";

function Form(props) {
    const {form, schema} = props;
    const fields = form.fields;
    const formTitle = form.title;
    const properties = schema.properties;
    const {register, handleSubmit, setValue, watch, errors} = useForm();
    const onSubmit = data => {
        alert(JSON.stringify(data, null));
    };

    const handleChange = e => {
        setValue(e.target.name, e.target.value);
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>{formTitle}</h1>
                <div>
                    <Fields
                        fields={fields}
                        properties={properties}
                        watch={watch}
                        onChange={handleChange}
                        errors={errors}
                        register={register}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}


export default Form;
