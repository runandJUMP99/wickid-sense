import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import {storage} from "../../../../../firebase/firebase";

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
                options: props.realms.map(realm => ({
                            value: realm.id, 
                            displayValue: realm.name
                        }))
            },
            value: "",
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
        priceDollars: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ''
            },
            value: '',
            validation: {
                required: true,
                isNumeric: true
            },
            valid: false,
            touched: false,
            label: "Price: "
        },
        priceCents: {
            elementType: 'input',
            elementConfig: {
                type: 'text',
                placeholder: ''
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
    const [candleImage, setCandleImage] = useState(<CandleImg />);
    const [imageAsFile, setImageAsFile] = useState("");
    const [imgLoading, setImgLoading] = useState(false);

    useEffect(() => {
        const updatedCandle = {
            ...form
        };

        let setCandleName;
        let setCandleImg;

        if (props.setCandleId) {
            const setCandle = props.candles.filter(candle => candle.id === props.setCandleId);
    
            if (setCandle.length !== 0) {
                let setCandleRealm = setCandle[0].realm;
                setCandleName = setCandle[0].name;
                setCandleImg = setCandle[0].img;
                const setCandlePriceDollars = setCandle[0].priceDollars;
                const setCandlePriceCents = setCandle[0].priceCents;
                const setCandleDescription = setCandle[0].description;
        
                const setCandleInfo = [setCandleRealm, setCandleName, setCandlePriceDollars, setCandlePriceCents, setCandleDescription, setCandleImg];
        
                updatedCandle.realm.elementConfig.options = props.realms.map(realm => ({
                    value: realm.id, 
                    displayValue: realm.name
                }));
                
                props.realms.forEach(realm => {
                    if (realm.id === setCandleRealm) {
                        setCandleRealm = realm.name;
                    }
                });
        
                let i = 0;
            
                for (let key in updatedCandle) {
                    if (key !== "img") {
                        updatedCandle[key].value = setCandleInfo[i];
                        i++;
                    }
                }
            } else {
                updatedCandle.realm.elementConfig.options = props.realms.map(realm => ({
                    value: realm.id, 
                    displayValue: realm.name
                }));
            
                for (let key in updatedCandle) {
                    updatedCandle[key].value = "";
                }
            }
        } else {
            updatedCandle.realm.elementConfig.options = props.realms.map(realm => ({
                value: realm.id, 
                displayValue: realm.name
            }));
        
            for (let key in updatedCandle) {
                updatedCandle[key].value = "";
            }
        }

        setForm(updatedCandle);
        setCandleImage(<CandleImg 
                        name={setCandleName}
                        img={setCandleImg} />);
    }, [props.candles, props.realms, props.setCandleId]);

    function submitHandler(event) {
        event.preventDefault();

        let formData = {};
        
        for (let formElementIdentifier in form) {
            if (formElementIdentifier !== "img") {
                formData[formElementIdentifier] = form[formElementIdentifier].value;
            }
        }

        if (!formData.realm) {
            formData = {
                ...formData,
                realm: props.realms[0].id
            }
        }

        if (form.img.value) {
            const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile);
            
            uploadTask.on("state_changed", snapshot => {
                setImgLoading(true);
                console.log(snapshot);
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
                
                        if (props.setCandleId) {
                            props.onEditCandle(props.token, formData, props.setCandleId);
                        } else {
                            props.onAddCandle(props.token, formData);
                        }

                        setImgLoading(false);
                        props.onClick();
                    });
            });
        } else {
            const setCandle = props.candles.filter(candle => candle.id === props.setCandleId);

            if (props.setCandleId) {
                formData = {
                    ...formData,
                    img: setCandle[0].img
                };
            }

            if (props.setCandleId) {
                props.onEditCandle(props.token, formData, props.setCandleId);
            } else {
                props.onAddCandle(props.token, formData);
            }

            props.onClick();
        }
    }

    function inputChangedHandler(event, inputIdentifier) {
        const updatedCandle = {
            ...form
        };
        const updatedCandleElement = { 
            ...updatedCandle[inputIdentifier]
        };
        
        if (event.target.type === "file") {
            const image = event.target.files[0];
            setImageAsFile(imageFile => (image));
        }

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
        </React.Fragment>
    );

    if (props.loading || imgLoading) {
        newForm = <Spinner />;
    }

    return (
        <div className={classes.CandleEditorForm}>
            {candleImage}
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
        onEditCandle: (token, candleData, candleId) => dispatch(actions.editCandle(token, candleData, candleId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CandleEditorForm);