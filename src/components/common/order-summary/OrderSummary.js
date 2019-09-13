import React from "react"

export const OrderSummary = (props) => {
    const ingredientsList = Object.keys(props.ingredients).map((key,index) => {
        return (
            <li key={key}><span  style={{textTransform:'capitalize'}}>{key}</span> - <span>{props.ingredients[key]}</span></li>
        );
    });
    return (
        <div>
            <h3>Order Summary:</h3>
            <ul>
                {ingredientsList}
            </ul>
        </div>
    );
};
