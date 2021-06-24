import React from "react"
import MarkdownToJsx from "markdown-to-jsx"
import PropTypes from "prop-types"

export const Markdown = ({ className, content }) => (
  <div className={className}>
    <MarkdownToJsx>{content}</MarkdownToJsx>
  </div>
)

Markdown.defaultProps = {
  className: "",
}

Markdown.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
}
