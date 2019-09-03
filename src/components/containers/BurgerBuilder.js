import React from 'react'
import {Fragment, useState} from 'react'
import Burger from "../burger/Budger";

const BurgerBuilder = (props) => {
    const initState = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 1
        }
    };
    const [ingredients] = useState(initState);

    return (
        <Fragment>
            <div><Burger {...ingredients}/></div>
            <div>Build Controls</div>
        </Fragment>
    );
};

export default BurgerBuilder;
