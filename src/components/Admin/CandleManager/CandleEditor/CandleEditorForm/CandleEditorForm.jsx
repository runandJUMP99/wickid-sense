import React, {useState} from "react";
import { connect } from "react-redux";

import Button from "../../../../UI/Button/Button";
import CandleImg from "../Candle/CandleImg/CandleImg";
import Input from "../../../../UI/Input/Input";
import Spinner from "../../../../UI/Spinner/Spinner";

import classes from "./CandleEditorForm.module.css";
import * as actions from "../../../../../store/actions/index";

const CandleEditorForm = (props) => {
    let optionValue = "";
    
    if (props.realms.length !== 0) {
        optionValue = props.realms[0].id;
    }

    const [form, setForm] = useState({
        realm: {
            elementType: "select",
            elementConfig: {
                options: props.realms.map(realm => ({
                    value: realm.id, 
                    displayValue: realm.name
                }))
            },
            value: optionValue,
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

    // if (props.setCandleId) {
    //     const setCandle = props.candles.filter(candle => candle.id === props.setCandleId);

    //     let setCandleRealm = setCandle[0].realm;
    //     const setCandleName = setCandle[0].name;
    //     const setCandlePrice = setCandle[0].price;
    //     const setCandleDescription = setCandle[0].description;

    //     const setCandleInfo = [setCandleRealm, setCandleName, setCandlePrice, setCandleDescription];
    
    //     const updatedCandle = {
    //         ...form
    //     };

    //     updatedCandle.realm.elementConfig.options = props.realms.map(realm => ({
    //         value: realm.id, 
    //         displayValue: realm.name
    //     }));
        
    //     props.realms.forEach(realm => {
    //         if (realm.id === setCandleRealm) {
    //             setCandleRealm = realm.name;
    //         }
    //     });

    //     let i = 0;
    
    //     for (let key in updatedCandle) {
    //         updatedCandle[key].value = setCandleInfo[i];
    //         i++;
    //     }
    // } else {
    //     const updatedCandle = {
    //         ...form
    //     };

    //     updatedCandle.realm.elementConfig.options = props.realms.map(realm => ({
    //         value: realm.id, 
    //         displayValue: realm.name
    //     }));
    
    //     for (let key in updatedCandle) {
    //         updatedCandle[key].value = "";
    //     }
    // }

    function submitHandler(event) {
        event.preventDefault();
        const formData = {};
        
        for (let formElementIdentifier in form) {
            formData[formElementIdentifier] = form[formElementIdentifier].value;
        }

        props.onAddCandle(props.token, formData);
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
        </React.Fragment>
    );

    if (props.loading) {
        newForm = <Spinner />;
    }

    return (
        <div className={classes.CandleEditorForm}>
            <CandleImg />
            {newForm}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        candles: state.candles.candles,
        loading: state.candles.loading,
        realms: state.realms.realms,
        setCandleId: state.candles.setCandleId,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddCandle: (token, candleData) => dispatch(actions.addCandle(token, candleData)),
        onSetCandleId: (candleId) => dispatch(actions.setCandleId(candleId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandleEditorForm);