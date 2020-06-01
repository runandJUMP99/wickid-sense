import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    let moneySymbol;
    let labelStyle = {display: "none"};
    let styles = null
    const inputClasses = [classes.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            if (props.elementConfig.placeholder === "") {
               inputClasses.push(classes.Price);
               labelStyle = {display: "inline-block"};
               styles = {
                   display: "inline-block",
                   padding: "8px 2px",
                   width: "auto"
                };

               if (props.id === "priceDollars") {
                   moneySymbol = " $";
               } else if (props.id === "priceCents") {
                   moneySymbol = ". ";
               }
            }

            inputElement = (
                <React.Fragment>
                    <span>{moneySymbol}</span>
                    <input
                    className={inputClasses.join(' ')}
                    {...props.elementConfig}
                    value={props.value}
                    onChange={props.changed} />
                </React.Fragment>
            );
            break;                
        case ( 'textarea' ):
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
            break;
        case ( 'select' ):
            inputElement = (
                <select
                    className={inputClasses.join(' ')}
                    value={props.value}
                    onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed} />;
    }

    return (
        <div style={styles}className={classes.Input}>
            <label style={labelStyle} className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;