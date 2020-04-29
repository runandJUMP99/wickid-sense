import React from "react";

import classes from "./Signup.module.css";

const Signup = () => {
    return (
        <div className={classes.Signup}>
            <div className={classes.SignupBackground}>
                <h1 className="mb-3 font-weight-normal text-center">wickid-sense</h1>
                <p className="mb-3 text-center">please sign in</p>
                <form action="/login" method="post">
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