import React from "react";

import classes from "./RealmEditorForm.module.css";

const RealmEditorForm = () => {
    return (
        <div className={classes.RealmEditorForm}>
            <form action="">
                <label htmlFor="realm">Realm: </label>
                <select name="realm">
                    <option value="First Realm">First Realm</option>
                    <option value="Second Realm">Second Realm</option>
                    <option value="Third Realm">Third Realm</option>
                </select>   
                <label htmlFor="name">Name: </label>
                <input type="text" name="name"/>
                <label htmlFor=""></label>
            </form>
        </div>
    );
}

export default RealmEditorForm;