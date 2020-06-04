import React, {  useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import GlobalLoader from "../../UI/GlobalLoader/GlobalLoader";

import classes from "./Signup.module.css";
import * as actions from "../../../store/actions/index";

const Signup = (props) => {
    const [authForm, setAuthForm] = useState({
        email: {
            elementType: "input",
            elementConfig:{
                type: "email",
                placeholder: "Email Address"
            },
            value: "",
        },
        password: {
            elementType: "input",
            elementConfig:{
                type: "password",
                placeholder: "Password"
            },
            value: "",
        }
    });

    function inputChangedHandler(event, inputName) {
        const updatedInputs = {
            ...authForm,
            [inputName]: {
                ...authForm[inputName],
                 value: event.target.value,
            }
        };

        setAuthForm(updatedInputs);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(authForm.email.value, authForm.password.value);
    }

    const formElementsArray = [];

    for (let key in authForm) {
        formElementsArray.push({
            id: key,
            config: authForm[key]
        });
    }

    let errorMessage = null;

    if (props.error) {
        errorMessage = <p style={{color: "red"}}className="mb-3 text-center">invalid login information. please try again</p>;
    }

    let authRedirect = null;

    if (props.isAuthenticated) {
        authRedirect = <Redirect to={props.authRedirectPath} />
    }

    let form = (
        <React.Fragment>
            {errorMessage ? errorMessage : <p className="mb-3 text-center">please sign in</p>}
            <form className={classes.Form} onSubmit={submitHandler}>
                {formElementsArray.map(formElement => (
                    <input 
                        key={formElement.id}
                        className="form-control"
                        type={formElement.config.elementConfig.type}
                        placeholder={formElement.config.elementConfig.placeholder}
                        onChange={(event) => inputChangedHandler(event, formElement.id)}
                        value={formElement.config.value}
                        required />
                ))}
                <button className="btn btn-lg btn-block" type="submit">sign in</button>
            </form>
        </React.Fragment>
    );   
    
    if (props.loading) {
        form = <GlobalLoader />
    }

    return (
        <div className={classes.Signup}>
            {authRedirect}
            <div className={classes.SignupBackground}>
                <h1 className="mb-3 font-weight-normal text-center">wickid-sense</h1>
                {form}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        authRedirectPath: state.auth.authRedirectPath
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath("/candlemanager"))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);