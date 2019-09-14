import React, {Fragment} from 'react';
import styles from './Layout.module.css';
import {Toolbar} from "../../toolbar/Toolbar";
import {SideDrawer} from "../../side-drawer/SideDrawer";

const Layout = (props) => {
    return (
        <Fragment>
            {/*<div>Toolbar, SideDrawer, Backdrop</div>*/}
            <SideDrawer/>
            <Toolbar/>
                <main className={styles.layoutStyle}>
                    {props.children}
                </main>

        </Fragment>
    );
};


export default Layout
