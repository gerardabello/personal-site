import React from 'react'
import PropTypes from 'prop-types'

const Plus = ({ color }) => (
  <svg
    width="59px"
    height="59px"
    viewBox="0 0 59 59"
    version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-228.000000, -458.000000)" fill={color}>
        <g transform="translate(228.000000, 458.000000)">
          <rect x="24" y="0" width="11" height="59" rx="3" />
          <rect
            transform="translate(29.500000, 29.500000) rotate(90.000000) translate(-29.500000, -29.500000) "
            x="24"
            y="0"
            width="11"
            height="59"
            rx="3"
          />
        </g>
      </g>
    </g>
  </svg>
)

Plus.propTypes = {
  color: PropTypes.string
}

export default Plus
