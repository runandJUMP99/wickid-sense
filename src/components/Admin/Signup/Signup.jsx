import React, { useState } from "react";

import classes from "./Signup.module.css";

const Signup = () => {
    const form = useState({
        inputs: {
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Email Address'
                },
                value: "",
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },
            password: {
                elementType: 'input',
                elementConfig: {
                    type: 'password',
                    placeholder: 'Password'
                },
                value: "",
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
        }
    });

    // function checkValidity(value, rules) {
    //     let isValid = true;
        
    //     if (rules.required) {
    //         isValid = value.trim() !== '' && isValid;
    //     }

    //     if (rules.minLength) {
    //         isValid = value.length >= rules.minLength && isValid;
    //     }

    //     return isValid;
    // }

    // function inputChangedHandler(event, inputName) {
    //     const updatedInputs = {
    //         ...form.inputs,
    //         [inputName]: {
    //             ...form.inputs[inputName],
    //              value: event.target.value,
    //              valid: this.checkValidity(event.target.value, form.inputs[inputName].validation),
    //              touched: true
    //         }
    //     };

    //     setForm(prevValue => {
    //         return {
    //             ...prevValue,
    //             inputs: updatedInputs
    //         }
    //     });
    // }

    // function submitHandler(event) {
    //     event.preventDefault(); 
    // }

    return (
        <div className={classes.Signup}>
            <div className={classes.SignupBackground}>
                <h1 className="mb-3 font-weight-normal text-center">wickid-sense</h1>
                <p className="mb-3 text-center">please sign in</p>
                <form >
                    <label for="inputEmail" className="sr-only">email address</label>
                    <input name="username" type="email" id="inputEmail" className="form-control" placeholder="email address" required autofocus />
                    <label for="inputPassword" className="sr-only">password</label>
                    <input name="password" type="password" id="inputPassword" className="form-control" placeholder="password" required />
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" value="remember-me" /> remember me
                        </label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block" type="submit">sign in</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;