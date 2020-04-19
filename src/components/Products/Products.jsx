import React from "react";

import RealmSelector from "./RealmSelector/RealmSelector";

import classes from "./Products.module.css"

const Products = () => {
    return (
        <div className={classes.Products}>
            <RealmSelector />
        </div>
    )
}

export default Products;