import React from "react"

const LogoSVG = ({ color = "#031926" }) => (
  <svg width="140px" height="32px" viewBox="0 0 140 32" version="1.1">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-39.000000, -37.000000)">
        <g transform="translate(39.000000, 26.000000)">
          <text
            font-family="Nunito-medium, Nunito"
            font-size="40"
            font-weight="500"
            fill={color}
          >
            <tspan x="0" y="40">
              vincent
            </tspan>
          </text>
          <circle
            fill="#279AEE"
            fill-rule="evenodd"
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
