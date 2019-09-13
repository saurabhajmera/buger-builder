import React from "react"

export const OrderSummary = (props) => {
    const ingredientsList = Object.keys(props.ingredients).map((key,index) => {
        return (
            <li><span key={key} style={{'text-transform':'capitalize'}}>{key}</span> - <span>{props.ingredients[key]}</span></li>
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
