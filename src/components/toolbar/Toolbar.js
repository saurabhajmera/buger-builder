import React from 'react'
import classes from './Toolbar.module.css'
import {Logo} from "../logo/Logo";
import {NavigationItems} from "../navigation-items/NavigationItems";
import {NavigationItem} from "../navigation-item/NavigationItem";

export const Toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>MENU</div>
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
