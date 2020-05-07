import React, { useState } from "react";

import Button from "../../../../UI/Button/Button";
import Input from "../../../../UI/Input/Input";
import Realm from "../Realm/Realm";
import Spinner from "../../../../UI/Spinner/Spinner";

import classes from "./RealmEditorForm.module.css";

const RealmEditorForm = (props) => {
    const [form, setForm] = useState({
        inputs: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Realm Name'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
            img: {
                elementType: 'input',
                elementConfig: {
                    accept: "image/*",
                    type: 'file',
                    placeholder: 'Price'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
        },
        formIsValid: false,
        loading: false
    });

    function submitHandler(event) {
        event.preventDefault();
        // this.setState( { loading: true } );
        const formData = {};
        for (let formElementIdentifier in form.inputs) {
            formData[formElementIdentifier] = form.inputs[formElementIdentifier].value;
        }

        // axios.post( '/orders.json', order )
        //     .then( response => {
        //         this.setState( { loading: false } );
        //         this.props.history.push( '/' );
        //     } )
        //     .catch( error => {
        //         this.setState( { loading: false } );
        //     } );
    }

    function inputChangedHandler(event, inputIdentifier) {
        const updatedRealm = {
            ...form.inputs
        };
        const updatedRealmElement = { 
            ...updatedRealm[inputIdentifier]
        };

        updatedRealmElement.value = event.target.value;
        updatedRealmElement.valid = checkValidity(updatedRealmElement.value, updatedRealmElement.validation);
        updatedRealmElement.touched = true;
        updatedRealm[inputIdentifier] = updatedRealmElement;
        
        let formIsValid = true;
        
        for (let inputIdentifier in updatedRealm) {
            formIsValid = updatedRealm[inputIdentifier].valid && formIsValid;
        }
        
        setForm({inputs: updatedRealm, formIsValid: formIsValid});
    }

    function checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.isNumeric) {
            const pattern = /^\d+$/;
            isValid = pattern.test(value) && isValid
        }

        return isValid;
    }

    const formElementsArray = [];
    
    for (let key in form.inputs) {
        formElementsArray.push({
            id: key,
            config: form.inputs[key]
        });
    }

    let newForm = (
        <form onSubmit={submitHandler}>
            {formElementsArray.map(formElement => (
                <Input 
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}
            <Button clicked={props.onClick} btnType="Success" disabled={!form.formIsValid}>SUBMIT</Button>
            <Button clicked={props.onClick} btnType="Danger">CANCEL</Button>
        </form>
    );
    if (form.loading) {
        form = <Spinner />;
    }

    return (
        <div className={classes.RealmEditorForm}>
            <Realm />
            {newForm}
        </div>
    );
}

export default RealmEditorForm;