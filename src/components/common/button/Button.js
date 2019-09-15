import React from "react"
import styles from "./Button.module.css"
import PropTypes from "prop-types";

export const Button = (props) => {

    return (
        <button className={[styles.Button, styles[props.buttonType]].join(' ')} onClick={props.clickHandler}>{props.children}</button>
    );

};

Button.propType = {
    buttonType: PropTypes.string,
    clickHandler: PropTypes.func
};





