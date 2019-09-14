import {Logo} from "../logo/Logo";
import {NavigationItems} from "../navigation-items/NavigationItems";
import React from "react"
import {NavigationItem} from "../navigation-item/NavigationItem";
import classes from "./SideDrawer.module.css"

export const SideDrawer = () => {


    return (
        <div className={classes.SideDrawer}>
            <div className={classes.Logo}>
            <Logo/>
            </div>
            <nav>
                <NavigationItems style={{flexDirection:'column'}}>
                    <NavigationItem destination={"/"} active>Burder Builder</NavigationItem>
                    <NavigationItem destination={"/"}>Checkout</NavigationItem>
                </NavigationItems>
            </nav>
        </div>
    );
};
