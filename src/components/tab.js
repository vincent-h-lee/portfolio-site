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
      "py-4 pl-3 bg-transparent outline-none border-0 border-l-2 text-left hover:text-brand-lightgreen cursor-pointer focus:outline-none",
      {
        "border-brand-gray": !active,
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
  tabKey: PropTypes.string.isRequired,
}

export default Tab
