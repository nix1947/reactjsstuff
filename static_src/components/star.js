import React from 'react';

const Star = (props) => {
  <div className={(selected) ? "star selected" : "star"}
    onClick={onClick}>
</div>

Star.propTypes = {
selected: PropTypes.bool,
onClick: PropTypes.func
}
