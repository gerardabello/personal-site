import React from 'react'
import PropTypes from 'prop-types'

const Hex = ({ color }) => (
  <svg
    style={{ marginLeft: '-50%', marginTop: '-50%' }}
    width="67px"
    height="77px"
    viewBox="0 0 67 77"
    version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-335.000000, -196.000000)" fill={color}>
        <path d="M370.517451,196.543908 L400.017451,213.77476 C401.245211,214.491891 402,215.806873 402,217.228728 L402,251.771272 C402,253.193127 401.245211,254.508109 400.017451,255.22524 L370.517451,272.456092 C369.271008,273.184136 367.728992,273.184136 366.482549,272.456092 L336.982549,255.22524 C335.754789,254.508109 335,253.193127 335,251.771272 L335,217.228728 C335,215.806873 335.754789,214.491891 336.982549,213.77476 L366.482549,196.543908 C367.728992,195.815864 369.271008,195.815864 370.517451,196.543908 Z" />
      </g>
    </g>
  </svg>
)

Hex.propTypes = {
  color: PropTypes.string
}

export default Hex
