import React from "react"
import classes from "./Backdrop.module.css"
import PropTypes from "prop-types";

export const Backdrop = (props) => {
  return (
      <div onClick={props.onClickHandler} className={classes.Backdrop} style={{display: props.showBackdrop ? 'block' : 'none'}}></div>
  );
};


Backdrop.propType = {
    showBackdrop: PropTypes.funclean,
    onClickHandler: PropTypes.func
};
