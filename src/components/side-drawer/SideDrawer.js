import {Logo} from "../logo/Logo";
import {NavigationItems} from "../navigation-items/NavigationItems";
import React, {Fragment} from "react"
import {NavigationItem} from "../navigation-item/NavigationItem";
import classes from "./SideDrawer.module.css"
import {Backdrop} from "../common/backdrop/Backdrop";
import PropTypes from "prop-types"


export const SideDrawer = (props) => {
    let sideDrawerDivClassList = [classes.SideDrawer];
    if(props.showBackdrop){
        sideDrawerDivClassList.push(classes.Open);
    }else{
        sideDrawerDivClassList.push(classes.Close);

    }


    return (
        <Fragment>
            <div className={classes.SideDrawerBackdrop}><Backdrop showBackdrop={props.showBackdrop} onClickHandler={props.backDropOnClick}/></div>
            <div className={sideDrawerDivClassList.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems style={{flexDirection: 'column'}}>
                        <NavigationItem destination={"/"} active>Burder Builder</NavigationItem>
                        <NavigationItem destination={"/"}>Checkout</NavigationItem>
                    </NavigationItems>
                </nav>
            </div>
        </Fragment>
    );
};


SideDrawer.propTypes = {
    showBackdrop: PropTypes.bool,
    backDropOnClick: PropTypes.func
};
