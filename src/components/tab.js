import React, { forwardRef, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"

export const Tabs = ({ activeIndex, tabs, isActiveIndex, setActiveIndex }) => {
  const slider = useRef()
  const activeEl = useRef()

  useEffect(() => {
    if (activeEl.current) {
      setSliderStyle()
    }
  }, [activeIndex, activeEl])

  useEffect(() => {
    function handleResize() {
      if (activeEl.current) {
        setSliderStyle()
      }
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  })

  const handleRef = (ref, index) => {
    if (isActiveIndex(index)) {
      activeEl.current = ref
    }
  }

  const setSliderStyle = () => {
    if (window.innerWidth >= 768) {
      slider.current.style.removeProperty("width")
      slider.current.style.removeProperty("bottom")
      slider.current.style.left = 0
      slider.current.style.top = 0
      slider.current.style.transform = `translateY(${activeEl.current.offsetTop}px)`
      slider.current.style.height =
        activeEl.current.getBoundingClientRect().height + "px"
    } else {
      slider.current.style.removeProperty("height")
      slider.current.style.removeProperty("top")
      slider.current.style.bottom = 0
      slider.current.style.left = 0
      slider.current.style.transform = `translateX(${activeEl.current.offsetLeft}px)`
      slider.current.style.width =
        activeEl.current.getBoundingClientRect().width + "px"
    }
  }

  return (
    <section className="px-8 md:px-0 w-full md:w-auto">
      <nav className="relative flex flex-row overflow-x-auto w-full mb-12 lg:ml-32 md:mb-0 md:flex-col md:w-auto no-scrollbar">
        <div
          ref={slider}
          className="absolute h-1 bottom-0 lg:w-1 bg-brand-lightgreen transition-transform duration-300 delay-75 ease-in-out"
        ></div>
        {tabs.map((tab, index) => (
          <Tab
            key={tab}
            ref={(el) => handleRef(el, index)}
            active={isActiveIndex(index)}
            setActive={setActiveIndex}
            tabKey={index}
          >
            <span className="text-xl lg:text-2xl font-semibold">{tab}</span>
          </Tab>
        ))}
      </nav>
    </section>
  )
}

export const Tab = forwardRef(
  ({ active, children, setActive, tabKey }, ref) => (
    <button
      ref={ref}
      className={classnames(
        "px-6 py-5 bg-transparent outline-none border-0 border-b-4 whitespace-no-wrap text-left md:border-b-0 md:border-l-4 cursor-pointer focus:outline-none",
        {
          "text-white border-white": !active,
        }
      )}
      onClick={() => setActive(tabKey)}
    >
      {children}
    </button>
  )
)

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  setActive: PropTypes.func.isRequired,
  tabKey: PropTypes.any.isRequired,
}

export default Tab
