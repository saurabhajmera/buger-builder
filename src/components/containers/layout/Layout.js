import React, {Fragment, useState} from 'react';
import styles from './Layout.module.css';
import {Toolbar} from "../../toolbar/Toolbar";
import {SideDrawer} from "../../side-drawer/SideDrawer";

export const Layout = (props) => {

    const [layoutState, updateLayoutState] = useState({showBackDrop:true});

    const backDropClickHandler = () => {
        updateLayoutState({showBackDrop:false});
    };

    const showSideDrawer = () => {
        updateLayoutState((currentState) => {
            return {showBackDrop: !currentState.showBackDrop};
        });
    };

    return (
        <Fragment>
            {/*<div>Toolbar, SideDrawer, Backdrop</div>*/}
            <SideDrawer showBackdrop={layoutState.showBackDrop} backDropOnClick={backDropClickHandler}></SideDrawer>
            <Toolbar showMenuFn={showSideDrawer}/>
                <main className={styles.layoutStyle}>
                    {props.children}
                </main>

        </Fragment>
    );
};


