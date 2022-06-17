import React from "react";
import PropTypes from "prop-types";


const ProgressBar = ({ value, max }) => {
    return (

        <div className="barra">
            <progress value={value} max={max} />
            <span className="percentual">{(value / max) * 100}%</span>
        </div>  
    );
  };
    
  ProgressBar.propTypes = {
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
  };
  
  ProgressBar.defaultProps = {
    max: 100,
  };
  
  export default ProgressBar;