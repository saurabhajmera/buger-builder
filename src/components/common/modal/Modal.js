import React, {Fragment} from "react"
import classes from "./Modal.module.css"
import PropTypes from "prop-types";
import {Backdrop} from "../backdrop/Backdrop";

export const Modal = (props) => {
    const showModal = (props.showModal === true) ? true : false;

    return (
        <Fragment>
            <Backdrop showBackdrop={showModal}/>
            <div className={classes.Modal} style={{
                transform: showModal ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: (showModal) ? '1' : '0'
            }}>
                <div className={classes.HeaderSection}>
                    <button className={classes.CloseButton} onClick={() => {
                        props.hideModalFn()
                    }}>X
                    </button>
                </div>
                {props.children}
            </div>
        </Fragment>
    );
};

Modal.propType = {
    showModal: PropTypes.bool,
    hideModalFn: PropTypes.func
};
