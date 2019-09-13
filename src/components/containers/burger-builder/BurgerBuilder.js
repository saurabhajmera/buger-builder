import React, {Fragment, useState} from 'react'
import Burger from "../../burger/Budger";
import {BuildControls} from "../../build-controls/BuildControls";
import {RATES} from "../..//burger/budget-ingredients/ingredients-constants";
import * as _ from "lodash"
import classes from "./BurgerBuilder.module.css"
import {initialState} from "./BurgerBuilder.constants";
import {Modal} from "../../common/modal/Modal";
import {OrderSummary} from "../../common/order-summary/OrderSummary";

const BurgerBuilder = (props) => {
    const initState = initialState;
    const updateDisabledObject = () => {
        return Object.keys(initState.ingredients).reduce((disabledObject, currentItem) => {
            disabledObject[currentItem] = (initState.ingredients[currentItem] === 0);
            return disabledObject;
        }, {});
    };
    const isDisabled = updateDisabledObject();

    const [burgerState, updateIngredients] = useState(_.assign(initState,{disabled:isDisabled}));

    const getUpdatedCanOrderFlag = (ingredients) => {
        const totalQuantity = Object.keys(ingredients).reduce((sum, key) => {
            sum += ingredients[key];
            return sum;
        }, 0);
        return totalQuantity > 0;
    };


    const addIngredientHandler = (type) => {
        const newIngredients = {...burgerState};
        const currentCount = burgerState.ingredients[type];
        const newCount = currentCount + 1;
        newIngredients.ingredients[type] = newCount;
        newIngredients.totalCost += RATES[type];
        newIngredients.disabled[type] = (newIngredients.ingredients[type] === 0);
        newIngredients.canOrder = getUpdatedCanOrderFlag(newIngredients.ingredients);
        updateIngredients(newIngredients);
    };

    const removeIngredientHandler = (type) => {
        const newIngredients = {...burgerState};
        const currentCount = burgerState.ingredients[type];
        const newCount = (currentCount > 0) ? currentCount - 1 : 0;
        newIngredients.ingredients[type] = newCount;
        //disable remove button if the new count is zero
        newIngredients.disabled[type] = (newIngredients.ingredients[type] === 0);
        newIngredients.totalCost = (burgerState.totalCost > initState.totalCost) ? burgerState.totalCost - RATES[type] : initState.totalCost;
        newIngredients.canOrder = getUpdatedCanOrderFlag(newIngredients.ingredients);
        updateIngredients(newIngredients);
    };

    const showModal = () => {
        const newState = {...burgerState};
        newState.showOrderSummary = true;
        updateIngredients(newState);
    };
    
    const hideModal = () => {
        const newState = {...burgerState};
        newState.showOrderSummary = false;
        updateIngredients(newState);
    };

    return (

        <Fragment>
            <Modal showModal={burgerState.showOrderSummary} hideModalFn={hideModal}>
                <OrderSummary ingredients={burgerState.ingredients}/>
            </Modal>
            <div className={classes.OrderButtonPosition}><button className={classes.OrderButton} disabled={!burgerState.canOrder} onClick={()=>{showModal()}}>Order Now</button></div>

            <div><Burger {...burgerState}/></div>
            <div>Total Price: <span className={classes.priceNumeral}>$ {burgerState.totalCost.toFixed(2)}</span></div>
            <BuildControls addIngredientHandler={addIngredientHandler}
                           removeIngredientHandler={removeIngredientHandler} isRemoveIngredientDisabled={burgerState.disabled}></BuildControls>
        </Fragment>
    );
};

export default BurgerBuilder;
