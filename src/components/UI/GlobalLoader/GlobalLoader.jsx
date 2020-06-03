import React from 'react';

import classes from './GlobalLoader.module.css';

const GlobalLoader = () => {
    return (
        <div className={classes.GlobalLoader}>
            <div className={classes.Loader}>Loading...</div>
        </div>
    );
};

export default GlobalLoader;