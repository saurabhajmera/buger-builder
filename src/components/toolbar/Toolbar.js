import React from 'react'
import classes from './Toolbar.module.css'
import {Logo} from "../logo/Logo";
import {NavigationItems} from "../navigation-items/NavigationItems";
import {NavigationItem} from "../navigation-item/NavigationItem";
import PropTypes from "prop-types"


export const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.DrawerToggle} onClick={props.showMenuFn} style={{cursor:'pointer'}}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems>
                <NavigationItem destination={'/'} active>Burger Builder</NavigationItem>
                <NavigationItem destination={'/'}>Checkout</NavigationItem>

            </NavigationItems>
        </nav>
    </header>
);

Toolbar.propType = {
    showMenuFn: PropTypes.func
};
