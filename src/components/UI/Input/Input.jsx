import React from 'react';

import classes from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    let moneySymbol;
    let styles = null
    const inputClasses = [classes.InputElement];
    const labelClasses = [classes.Label];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(classes.Invalid);
    }

    switch ( props.elementType ) {
        case ( 'input' ):
            console.log(props.elementConfig.type);
            if (props.elementConfig.placeholder === "") {
               inputClasses.push(classes.Price);
               labelClasses.push(classes.PriceLabel);
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
            } else if (props.elementConfig.type === "file") {
                inputClasses.push(classes.Upload);
                labelClasses.push(classes.UploadLabel);
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
            <label htmlFor={props.elementConfig.id} className={labelClasses.join(" ")}>{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;