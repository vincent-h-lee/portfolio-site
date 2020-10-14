import React, { useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

export const useTabs = (initialTab) => {
  const [currentTab, setCurrentTab] = useState(initialTab)

  const isCurrentTab = (tab) => currentTab === tab

  return {
    currentTab,
    isCurrentTab,
    setCurrentTab,
  }
}

const Tab = ({ active, children, setActive, tabKey }) => (
  <button
    className={classnames(
      "px-6 py-5 bg-transparent outline-none border-0 border-b-4 whitespace-no-wrap text-left lg:border-b-0 lg:border-l-4 hover:text-brand-lightgreen cursor-pointer focus:outline-none",
      {
        "border-gray-500 text-gray-500": !active,
        "border-brand-lightgreen text-brand-lightgreen": active,
      }
    )}
    onClick={() => setActive(tabKey)}
  >
    {children}
  </button>
)

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  setActive: PropTypes.func.isRequired,
  tabKey: PropTypes.any.isRequired,
}

export default Tab
