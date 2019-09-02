import React, {Fragment} from 'react';
import styles from './Layout.module.css';

const Layout = (props) => {
    return (
        <Fragment>
            <div>Toolbar, SideDrawer, Backdrop</div>
                <main className={styles.layoutStyle}>
                    {props.children}
                </main>

        </Fragment>
    );
};


export default Layout
