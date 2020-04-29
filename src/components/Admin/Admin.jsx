import React from "react";

import Signup from "./Signup/Signup";

import classes from "./Admin.module.css";

const Admin = () => {
    return (
        <div className={classes.Admin}>
            <Signup />
        </div>
    );
}

export default Admin;