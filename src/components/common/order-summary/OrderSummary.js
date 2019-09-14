import React, {Fragment} from "react"
import {Button} from "../button/Button";

export const OrderSummary = (props) => {
    const ingredientsList = Object.keys(props.ingredients).map((key,index) => {
        return (
            <li key={key}><span  style={{textTransform:'capitalize'}}>{key}</span> - <span>{props.ingredients[key]}</span></li>
        );
    });

    const cancelHandler = () => {
        props.hideModalFn();
    };

    const continueHandler = () => {

        console.log('Continue !!!');
        props.hideModalFn();

    };
    return (
        <Fragment>
            <div>
                <h3>Order Summary:</h3>
                <ul>
                    {ingredientsList}
                </ul>
            </div>
            <div><span>Total Price: </span><strong>$ {props.totalCost}</strong></div>
            <div>
                <Button buttonType={'Danger'} clickHandler={cancelHandler}>Cancel</Button>
                <span>&nbsp;</span>
                <Button buttonType={'Success'} clickHandler={continueHandler}>Continue</Button>

            </div>
        </Fragment>
    );
};
