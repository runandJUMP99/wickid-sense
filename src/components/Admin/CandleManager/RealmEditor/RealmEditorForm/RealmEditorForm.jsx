import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {storage} from "../../../../../firebase/firebase";

import Button from "../../../../UI/Button/Button";
import Input from "../../../../UI/Input/Input";
import ProgressBar from "react-bootstrap/ProgressBar";
import Realm from "../../../../UI/Realm/Realm";
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
        },
        img: {
            elementType: 'input',
            elementConfig: {
                accept: "image/*",
                type: 'file',
                id: "upload"
            },
            value: "",
            validation: {},
            valid: true,
            label: "Upload Image"
        }
    });
    
    const [formIsValid, setFormIsValid] = useState(false);
    const [realm, setRealm] = useState(<Realm />);
    const [imageAsFile, setImageAsFile] = useState("");
    const [imgLoading, setImgLoading] = useState(false);
    const [status, setStatus] = useState(null);
    
    useEffect(() => {
        setFormIsValid(false);
        const updatedRealm = {
            ...form
        };
        
        let setRealmName;
        let setRealmImg;
        
        if (props.setRealmId) {
            const setRealm = props.realms.filter(realm => realm.id === props.setRealmId);
            setFormIsValid(true);
            
            if (setRealm.length !== 0) {
                setRealmName = setRealm[0].name;
                setRealmImg = setRealm[0].img;
                
                const setRealmInfo = [setRealmName, setRealmImg];
                
                let i = 0;
                
                for (let key in updatedRealm) {
                    if (key !== "img") {
                        updatedRealm[key].value = setRealmInfo[i];
                        i++;
                    }
                }    
            } else {   
                for (let key in updatedRealm) {
                    updatedRealm[key].value = "";
                }
            }
            
        } else {   
            for (let key in updatedRealm) {
                updatedRealm[key].value = "";
            }    
        }
        
        setForm(updatedRealm);
        setRealm(<Realm 
            name={setRealmName}
            img={setRealmImg} />);
    }, [props.setRealmId, props.realms]);


    // SUBMIT FORM HANDLER

                
    function submitHandler(event) {
        event.preventDefault();
        
        let formData = {};
        
        for (let formElementIdentifier in form) {
            if (formElementIdentifier !== "img") {
                formData[formElementIdentifier] = form[formElementIdentifier].value;
            }
        }


        // HANDLE SUBMITS WITH IMAGES THROUGH FIREBASE

        
        if (form.img.value) {
            const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);

            uploadTask.on("state_changed", snapshot => {
                setImgLoading(true);
                setStatus(<ProgressBar animated variant="success" now={(snapshot.bytesTransferred / snapshot.totalBytes) * 100} />);
            }, err => {
                console.log(err);
            }, () => {
                storage.ref("images").child(imageAsFile.name).getDownloadURL()
                    .then(firebaseUrl => {    
                        formData = {
                            ...formData,
                            img: firebaseUrl,
                            imgName: imageAsFile.name
                        };
    
                        if (props.setRealmId) {
                            props.onEditRealm(props.token, formData, props.setRealmId);
                        } else {
                            props.onAddRealm(props.token, formData);
                        }
    
                        setImgLoading(false);
                        setStatus(null);
                        props.onClick();
                    });
            });
        } else { //HANDLE SUBMITS WITHOUT IMAGES
            const setRealm = props.realms.filter(realm => realm.id === props.setRealmId);

            if (props.setRealmId) {
                formData = {
                    ...formData,
                    img: setRealm[0].img
                };
            }

            if (props.setRealmId) {
                props.onEditRealm(props.token, formData, props.setRealmId);
            } else {
                props.onAddRealm(props.token, formData);
            }

            props.onClick();
        }
    }


    // HANDLE TWO-WAY BINDING INPUT CHANGE


    function inputChangedHandler(event, inputIdentifier) {
        const updatedRealm = {
            ...form
        };
        const updatedRealmElement = { 
            ...updatedRealm[inputIdentifier]
        };

        if (event.target.type === "file") {
            const image = event.target.files[0];
            setImageAsFile(imageFile => (image));
        }

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


    // CHECK TO MAKE SURE INPUT IN FORM IS VALID


    function checkValidity(value, rules) {
        let isValid = true;
        if (!rules) {
            return true;
        }
        
        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
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
                    id={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    shouldValidate={formElement.config.validation}
                    touched={formElement.config.touched}
                    label={formElement.config.label}
                    changed={(event) => inputChangedHandler(event, formElement.id)} />
            ))}
            <Button btnType="Success" disabled={!formIsValid}>SUBMIT</Button>
            <div className={classes.Cancel} onClick={props.onClick}>CANCEL</div>
        </form>
    );
    
    if (props.loading || imgLoading) {
        newForm = (
            <div className={classes.ImgLoading}>
                <Spinner />
                {status}
            </div>
        );
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