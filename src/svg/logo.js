import React from "react"

const LogoSVG = ({ color = "#031926" }) => (
  <svg width="140px" height="32px" viewBox="0 0 140 32" version="1.1">
    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g transform="translate(-39.000000, -37.000000)">
        <g transform="translate(39.000000, 26.000000)">
          <text fontFamily="Lato" fontSize="40" fontWeight="500" fill={color}>
            <tspan x="0" y="40">
              vincent
            </tspan>
          </text>
          <circle
            fill="#5AB1BB"
            fillRule="evenodd"
            cx="136"
            cy="39"
            r="4"
          ></circle>
        </g>
      </g>
    </g>
  </svg>
)

export default LogoSVG
