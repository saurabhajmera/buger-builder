import React from "react"
import classes from "./Modal.module.css"
import PropTypes from "prop-type";

export const Modal = (props) => {
    const showModal = (props.showModal === true) ? true : false;

    return (
        <div className={classes.Modal} style={{display: (showModal) ? 'block' : 'none'}}>
            <div className={classes.HeaderSection}>
                <button className={classes.CloseButton} onClick={() => {
                    props.hideModalFn()
                }}>X
                </button>
            </div>
            {props.children}
        </div>
    );
};

Modal.propType = {
    showModal: PropTypes.boolean,
    hideModalFn: PropTypes.function
};
