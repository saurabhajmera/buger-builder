import React from "react"
import classes from "./Backdrop.module.css"
import PropTypes from "prop-type";

export const Backdrop = (props) => {
  return (
      <div className={classes.Backdrop} style={{display: props.showBackdrop ? 'block' : 'none'}}></div>
  );
};


Backdrop.propType = {
    showBackdrop: PropTypes.boolean,
};
