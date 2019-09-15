import React from 'react';
import styles from './BuildControls.module.css'
import {CONTROLS} from "../burger/budget-ingredients/ingredients-constants";
import {BuildControl} from "../build-controls/build-control/BuildControl"
import PropTypes from "prop-types";

export const BuildControls = (props) => {

    const controlsLists = CONTROLS.map(control => {
        return (
            <BuildControl key={control.label} label={control.label} controlType={control.type} {...props}></BuildControl>
        );
    });
    return (
        <div className={styles.BuildControls}>
            {controlsLists}
        </div>
    );
};

BuildControls.propType = {
    label:PropTypes.string,
    addIngredientHandler:PropTypes.func,
    removeIngredientHandler:PropTypes.func,
    isRemoveIngredientDisabled:PropTypes.object
};
