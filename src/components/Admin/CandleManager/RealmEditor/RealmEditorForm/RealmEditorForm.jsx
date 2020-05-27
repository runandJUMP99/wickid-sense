import React, {useEffect, useState} from "react";
import { connect } from "react-redux";

import Button from "../../../../UI/Button/Button";
import Input from "../../../../UI/Input/Input";
import Realm from "../../../../Products/RealmSelector/Realm/Realm";
import Spinner from "../../../../UI/Spinner/Spinner";

import classes from "./RealmEditorForm.module.css";
import * as actions from "../../../../../store/actions/index";

const RealmEditorForm = (props) => {
    const [form, setForm] = useState({
        name: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: 'Realm Name'
            },
            value: "",
            validation: {
                required: true
            },
            valid: false,
            touched: false
        }
        // img: {
        //     elementType: 'input',
        //     elementConfig: {
        //         accept: "image/*",
        //         type: 'file',
        //         placeholder: 'Price'
        //     },
        //     value: "",
        //     validation: {
        //         required: true
        //     },
        //     valid: false,
        //     touched: false
        // }
    });
    
    const [formIsValid, setFormIsValid] = useState(false);
    const [realm, setRealm] = useState(<Realm />);

    useEffect(() => {
        const updatedRealm = {
            ...form
        };

        let setRealmName;

        if (props.setRealmId) {
            const setRealm = props.realms.filter(realm => realm.id === props.setRealmId);
            setRealmName = setRealm[0].name;
            const setRealmInfo = [setRealmName];      
    
            let i = 0;
        
            for (let key in updatedRealm) {
                updatedRealm[key].value = setRealmInfo;
                i++;
            }    

        } else {   
            setRealmName = null;

            for (let key in updatedRealm) {
                updatedRealm[key].value = "";
            }    
        }

        setForm(updatedRealm);
        setRealm(<Realm name={setRealmName} />)
    }, [props.realms, props.setRealmId]);

    function submitHandler(event) {
        event.preventDefault();
        const formData = {};
        for (let formElementIdentifier in form) {
            formData[formElementIdentifier] = form[formElementIdentifier].value;
        }

        if (props.setRealmId) {
            props.onEditRealm(props.token, formData, props.setRealmId);
        } else {
            props.onAddRealm(props.token, formData);
        }
    }

    function inputChangedHandler(event, inputIdentifier) {
        const updatedRealm = {
            ...form
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
        
        setForm(updatedRealm);
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
            <div className={classes.Cancel} onClick={props.onClick}>CANCEL</div>
        </form>
    );
    if (props.loading) {
        newForm = <Spinner />;
    }

    return (
        <div className={classes.RealmEditorForm}>
            {realm}
            {newForm}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.realms.loading,
        realms: state.realms.realms,
        setRealmId: state.realms.setRealmId,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddRealm: (token, realmData) => dispatch(actions.addRealm(token, realmData)),
        onEditRealm: (token, realmData, realmId) => dispatch(actions.editRealm(token, realmData, realmId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RealmEditorForm);