import React, { useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { bubble as Menu } from "react-burger-menu"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"

const Header = ({ menuLinks }) => {
  const [menuState, setMenuState] = useState(false)
  const [isScrolled, setScrolled] = useState(false)
  useScrollPosition(({ currPos }) => {
    const currentlyScrolled = Math.abs(currPos.y) > 75
    if (currentlyScrolled !== isScrolled) {
      setScrolled(currentlyScrolled)
    }
  })

  return (
    <header
      className={classnames(
        "fixed z-50 bg-transparent w-full transition ease-linear duration-15 text-black",
        {
          "bg-white shadow-lg text-black": isScrolled,
        }
      )}
    >
      <nav
        className={classnames(
          "container flex flex-row justify-between items-center transition-padding ease-in-out duration-300",
          {
            "py-4": !isScrolled,
            "py-2": isScrolled,
          }
        )}
      >
        <h1>
          <a
            href="/"
            className="text-3xl font-bold"
            aria-label="Link to homepage"
          >
            vincent
          </a>
        </h1>

        <div className="sm:hidden">
          <Menu
            isOpen={menuState}
            onStateChange={(state) => setMenuState(state.isOpen)}
            right={true}
            styles={{
              bmBurgerButton: {
                position: "absolute",
                width: "1.8rem",
                height: "1.3rem",
                right: "1.5rem",
                top: "50%",
                transform: "translateY(-50%)",
              },
              bmBurgerBars: {
                background: "#2D3142",
              },
              bmBurgerBarsHover: {
                background: "#a90000",
              },
              bmCrossButton: {
                height: "24px",
                width: "24px",
              },
              bmCross: {
                background: "#bdc3c7",
              },
              bmMenuWrap: {
                position: "fixed",
                height: "100vh",
                top: 0,
              },
              bmMenu: {
                background: "#2D3142",
                padding: "2.5em 1.5em 0",
                fontSize: "1.15em",
                width: "100%",
              },
              bmMorphShape: {
                fill: "#2D3142",
              },
              bmItemList: {
                color: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              },
              bmItem: {
                display: "block",
                padding: "1rem 0",
                textTransform: "lowercase",
                width: "100%",
                textAlign: "center",
              },
              bmOverlay: {
                background: "rgba(0, 0, 0, 0.3)",
                top: 0,
                left: 0,
              },
            }}
          >
            <a href="/">Home</a>
            {menuLinks.map((menuItem) => (
              <a
                href={menuItem.link}
                key={menuItem.name}
                onClick={() => setMenuState(false)}
              >
                {menuItem.name}
              </a>
            ))}
          </Menu>
        </div>

        <ul className="hidden sm:flex flex-col sm:flex-row list-none -mx-4 my-0 text-xl">
          {menuLinks.map((menuItem) => (
            <li
              key={menuItem.name}
              className="mx-4 lowercase font-bold hover:text-brand-orange"
            >
              <a href={menuItem.link}>{menuItem.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

Header.propTypes = {
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  menuLinks: [],
  siteTitle: ``,
}

export default Header
