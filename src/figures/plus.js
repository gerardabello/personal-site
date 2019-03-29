import React from 'react'

export default ({ color }) => (
  <svg
    style={{ marginLeft: '-50%', marginTop: '-50%' }}
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
