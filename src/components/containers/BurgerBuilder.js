import React, {Fragment, useState} from 'react'
import Burger from "../burger/Budger";
import {BuildControls} from "../build-controls/BuildControls";
import {RATES} from "../burger/budget-ingredients/ingredients-constants";

const BurgerBuilder = (props) => {
    const initState = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalCost: 4
    };
    const [burgerState, updateIngredients] = useState(initState);

    const addIngredientHandler = (type) => {
        const newIngredients = {...burgerState};
        const currentCount = burgerState.ingredients[type];
        const newCount = currentCount + 1;
        newIngredients.ingredients[type] = newCount;
        newIngredients.totalCost += RATES[type];
        updateIngredients(newIngredients);
    };

    const removeIngredientHandler = (type) => {
        const newIngredients = {...burgerState};
        const currentCount = burgerState.ingredients[type];
        const newCount = (currentCount > 0) ? currentCount - 1 : 0;
        newIngredients.ingredients[type] = newCount;
        newIngredients.totalCost = (burgerState.totalCost > initState.totalCost) ? burgerState.totalCost - RATES[type] : initState.totalCost;
        updateIngredients(newIngredients);
    };

    return (

        <Fragment>
            <div>{JSON.stringify(burgerState)}</div>
            <div><Burger {...burgerState}/></div>
            <BuildControls addIngredientHandler={addIngredientHandler}
                           removeIngredientHandler={removeIngredientHandler}></BuildControls>
        </Fragment>
    );
};

export default BurgerBuilder;
