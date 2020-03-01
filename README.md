# React Form Schema Generation

## Description

JSON-based form definition generated from object schema and form definition.
 
Please see sample layouts below: 
#### Schema: Object property metadata
```
{
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
```
#### Form: Form layout logic and validation
```
    {
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
```
## Todo

- Apply correct UI styling
- Add robust error handling
- Tidy up validation logic
- Group fields like contacts in an array
- Group fields also can hidden or shown as group (instead of each individual fields)
- Allow fields to be group and, if required, multiple fields per line
- Add jest snapshot tests
- Add new widgets, such as select box
- See if the useForm NPM package (which is excellent) can have a better and consistent validation method. For example, custom validation don't permit an associated message.
 
## Prerequisites

Please ensure that the latest version of NPM and NodeJs are installed 

## Installing

```
npm install 
```

## Run sample executions

```
npm start
```

## Running the tests
```
npm run test
```

## Author

**Paul Caruana** 