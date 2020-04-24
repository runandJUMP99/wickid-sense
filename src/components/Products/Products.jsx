import React from "react";

import ProductDisplay from "./ProductDisplay/ProductDisplay";
import RealmSelector from "./RealmSelector/RealmSelector";

import classes from "./Products.module.css"

const Products = () => {
    return (
        <div className={classes.Products}>
            <ProductDisplay />
        </div>
    )
}

export default Products;