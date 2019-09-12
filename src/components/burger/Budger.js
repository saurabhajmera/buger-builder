import React from 'react';
import classes from './Budger.module.css'
import BurgerIngredients from "./budget-ingredients/BudgerIngredients";

const Burger = (props) => {
    const burgerStuffing = Object.keys(props.ingredients).map((ingredient) => {
        let count = props.ingredients[ingredient];
        let newElement = [];
        while (count > 0) {
            newElement.push(<BurgerIngredients key={ingredient + '_' + count} type={ingredient}/>);
            count--;
        }
        return newElement;

    });
    const ingredientsCount = burgerStuffing.reduce((acc, current) => {
        acc += current.length;
        return acc;
    }, 0);
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top"/>
            {(ingredientsCount > 0) ? burgerStuffing : <p>Add Ingredients to your Burger, otherwise its just wheat</p>}


            <BurgerIngredients type="bread-bottom"/>
        </div>
    );
};

export default Burger;
