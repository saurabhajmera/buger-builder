import React from 'react';
import classes from './BuildControl.module.css'
import PropTypes from "prop-type";

export const BuildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={() => props.removeIngredientHandler(props.controlType)}
                    disabled={props.isRemoveIngredientDisabled[props.controlType]}>Less
            </button>
            <button className={classes.More} onClick={() => props.addIngredientHandler(props.controlType)}>
                More
            </button>
        </div>
    );
};

BuildControl.propType = {
    label: PropTypes.string,
    addIngredientHandler: PropTypes.function,
    removeIngredientHandler: PropTypes.function,
    controlType: PropTypes.string,
    isRemoveIngredientDisabled: PropTypes.object
};

