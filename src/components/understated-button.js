import React from "react"
import PropTypes from "prop-types"
import "./understated-button.scss"

const UnderstatedButton = ({ children }) => (
  <button className="understated-button">{children}</button>
)

UnderstatedButton.propTypes = {
  children: PropTypes.node,
}

export default UnderstatedButton
