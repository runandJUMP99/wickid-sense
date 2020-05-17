import React, {useState} from "react";

import Button from "../../../../UI/Button/Button";
import CandleImg from "../Candle/CandleImg/CandleImg";
import Input from "../../../../UI/Input/Input";
import Spinner from "../../../../UI/Spinner/Spinner";

import classes from "./CandleEditorForm.module.css";
import axios from "../../../../../axios";

const CandleEditorForm = (props) => {
    const [form, setForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Candle Name'
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        },
        price: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Price'
            },
            value: '',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched: false
        },
        description: {
            elementType: 'textarea',
            elementConfig: {
                placeholder: 'Description',
                rows: 4
            },
            value: '',
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
    });

    const [formIsValid, setFormIsValid] = useState(false);
    const [loading, setLoading] = useState(false);
    

    function submitHandler(event) {
        event.preventDefault();
        setLoading(true);
        const formData = {};
        for (let formElementIdentifier in form) {
            formData[formElementIdentifier] = form[formElementIdentifier].value;
        }

        axios.post('/realms/realm/candles.json', formData)
            .then( response => {
                setLoading(false);
                props.history.push( '/' );
            } )
            .catch( error => {
                setLoading(false);
            } );
    }

    function inputChangedHandler(event, inputIdentifier) {
        const updatedCandle = {
            ...form
        };
        const updatedCandleElement = { 
            ...updatedCandle[inputIdentifier]
        };

        updatedCandleElement.value = event.target.value;
        updatedCandleElement.valid = checkValidity(updatedCandleElement.value, updatedCandleElement.validation);
        updatedCandleElement.touched = true;
        updatedCandle[inputIdentifier] = updatedCandleElement;
        
        let formIsValid = true;
        
        for (let inputIdentifier in updatedCandle) {
            formIsValid = updatedCandle[inputIdentifier].valid && formIsValid;
        }
        
        setForm(updatedCandle);
        setFormIsValid(formIsValid);
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
    
    for (let key in form) {
        formElementsArray.push({
            id: key,
            config: form[key]
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
            <Button clicked={props.onClick} btnType="Success" disabled={!formIsValid}>SUBMIT</Button>
            <Button clicked={props.onClick} btnType="Danger">CANCEL</Button>
        </form>
    );

    if (loading) {
        setForm(<Spinner />);
    }

    return (
        <div className={classes.CandleEditorForm}>
            <CandleImg />
            {newForm}
        </div>
    );
}

export default CandleEditorForm;