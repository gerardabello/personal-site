import React from 'react'
import PropTypes from 'prop-types'

const Ring = ({ color }) => (
  <svg
    style={{ marginLeft: '-50%', marginTop: '-50%' }}
    width="75px"
    height="75px"
    viewBox="0 0 75 75"
    version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g
        transform="translate(-17.000000, -261.000000)"
        stroke={color}
        strokeWidth="10">
        <circle cx="54.5" cy="298.5" r="32.5" />
      </g>
    </g>
  </svg>
)

Ring.propTypes = {
  color: PropTypes.string
}

export default Ring
