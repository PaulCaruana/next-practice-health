import React from 'react';
import Form from "./Form"

function App() {
    const registrationSchema = {
        "name": "registration",
        "desc": "Patient Registration",
        "properties": {
            "fullName" : {
                "title": "Full name",
                "type": "string"
            },
            "birthday" : {
                "title": "Birthday",
                "type": "date"
            },
            "gender" : {
                "title": "Gender",
                "type": "enum",
                "values": {
                    "male" : "Male",
                    "female" : "Female"
                }
            },
            "mobile" : {
                "title": "Mobile",
                "type": "string"
            },
            "home" : {
                "title": "Home",
                "type": "string"
            },
            "guardianConsent" : {
                "title": "Guardian consent",
                "type": "boolean"
            },
            "guardian": {
                "title": "Guardian",
                "type": "string"
            }
        }
    };

    const registrationForm = {
        "name": "registrationForm",
        "title": "Registration form",
        "fields": {
            "fullName" : {
                "validators": {
                    "required": true,
                    "containsASpace" : true
                },
                "defaultErrorMsg" : "Name must contain a space"
            },
            "birthday": {
                "validators": {
                    "required": true,
                    "ageFromDate": 18
                },
                "defaultErrorMsg" : "Your must be 18 years or older"
            },
            mobile: {},
            home: {},
            gender: {},
            guardianConsent: {},
            guardian: {
                "when" : "guardianConsent",
                "validators": {
                    "required": true,
                    "containsASpace" : true
                },
                "defaultErrorMsg" : "Guardian name must contain a space"
            }
        }
    }


    return (
        <div className="App">
            <Form schema={registrationSchema} form={registrationForm} />
        </div>
    );
}


export default App;
