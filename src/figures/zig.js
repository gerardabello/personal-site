import React from "react";
import PropTypes from "prop-types";

const Zig = ({ color }) => (
  <svg width="111px" height="20px" viewBox="0 0 111 20" version="1.1">
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g
        transform="translate(-58.000000, -63.000000)"
        stroke={color}
        strokeWidth="10"
      >
        <polyline points="63 78 72.8315056 68 85.1580509 78 96.1974871 68 106.851312 78 118.598137 68 129.696196 78 141.429994 68 154.199472 78 164 68" />
      </g>
    </g>
  </svg>
);

Zig.propTypes = {
  color: PropTypes.string,
};

export default Zig;
