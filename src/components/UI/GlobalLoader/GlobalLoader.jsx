import React from 'react';

import classes from './GlobalLoader.module.css';

const GlobalLoader = () => {
    return (
        <div className={classes.GlobalLoader}>
            <img src="https://firebasestorage.googleapis.com/v0/b/wickid-sense.appspot.com/o/images%2FwickidCloudLoader.svg?alt=media&token=0a6c3211-df0a-49c6-98fa-abed9380d3ee" alt="wickid-cloud-loading"/>
        </div>
    );
};

export default GlobalLoader;