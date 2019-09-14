import React, {Fragment} from 'react';
import styles from './Layout.module.css';
import {Toolbar} from "../../toolbar/Toolbar";

const Layout = (props) => {
    return (
        <Fragment>
            {/*<div>Toolbar, SideDrawer, Backdrop</div>*/}
            <Toolbar/>
                <main className={styles.layoutStyle}>
                    {props.children}
                </main>

        </Fragment>
    );
};


export default Layout
