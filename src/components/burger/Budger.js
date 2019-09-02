import React from 'react';
import classes from './Budger.module.css'
import BurgerIngredients from "./budget-ingredients/BudgerIngredients";

const Burger = (props) =>{
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            <BurgerIngredients type="salad" />
            <BurgerIngredients type="meat"/>

            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};

export default Burger;
