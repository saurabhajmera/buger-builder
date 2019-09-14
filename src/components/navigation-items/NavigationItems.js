import React from 'react'
import classes from './NavigationItems.module.css'

export const NavigationItems = (props) => (
    <ul className={classes.NavigationItems} style={props.style}>
        {props.children}
    </ul>
);
