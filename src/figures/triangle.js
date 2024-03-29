import React from "react";
import PropTypes from "prop-types";

const Triangle = ({ color }) => (
  <svg width="64px" height="58px" viewBox="0 0 64 58" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-470.000000, -28.000000)" fill={color}>
        <path d="M504.620443,29.701383 L533.513778,81.5394252 C534.320431,82.9866559 533.80114,84.8137898 532.35391,85.620443 C531.907346,85.8693474 531.404581,86 530.893335,86 L473.106665,86 C471.449811,86 470.106665,84.6568542 470.106665,83 C470.106665,82.4887538 470.237318,81.9859891 470.486222,81.5394252 L499.379557,29.701383 C500.18621,28.2541523 502.013344,27.7348616 503.460575,28.5415148 C503.947439,28.8128817 504.349076,29.2145188 504.620443,29.701383 Z" />
      </g>
    </g>
  </svg>
);

Triangle.propTypes = {
  color: PropTypes.string,
};

export default Triangle;
