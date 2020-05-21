import React, {useState} from "react";
import { connect } from "react-redux";

import Button from "../../../../UI/Button/Button";
import CandleImg from "../Candle/CandleImg/CandleImg";
import Input from "../../../../UI/Input/Input";
import Spinner from "../../../../UI/Spinner/Spinner";

import classes from "./CandleEditorForm.module.css";
import * as actions from "../../../../../store/actions/index";

const CandleEditorForm = (props) => {
    const [form, setForm] = useState({
        realm: {
            elementType: "select",
            elementConfig: {
                options: props.realms.map(realm => (
                    {value: realm.id, displayValue: realm.name}
                ))
            },
            value: "firstRealm",
            validation: {},
            valid: true
        },
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

    function submitHandler(event) {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in form) {
            formData[formElementIdentifier] = form[formElementIdentifier].value;
        }

        props.onAddCandle(formData);
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
        <React.Fragment>
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
        </React.Fragment>
    );

    if (props.loading) {
        newForm = <Spinner />;
    }

    return (
        <div className={classes.CandleEditorForm}>
            <CandleImg />
            <form onSubmit={submitHandler}>
                {newForm}
            </form> 
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.candles.loading,
        realms: state.realms.realms
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddCandle: (candleData) => dispatch(actions.addCandle(candleData))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandleEditorForm);