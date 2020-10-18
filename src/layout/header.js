import React, { useState } from "react"
import PropTypes from "prop-types"
import classnames from "classnames"
import { bubble as Menu } from "react-burger-menu"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import LogoSVG from "../svg/logo"

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
        "z-50 bg-transparent fixed w-full transition ease-linear duration-150",
        {
          "text-white": !isScrolled,
          "bg-white shadow-lg text-black": isScrolled,
        }
      )}
    >
      <nav
        className={classnames(
          "container flex flex-row justify-between items-center transition-colors transition-padding ease-in-out duration-300",
          {
            "py-6 md:py-10": !isScrolled,
            "py-4 md:py-6": isScrolled,
          }
        )}
      >
        <h1>
          <a href="/">
            <LogoSVG color={isScrolled ? undefined : "white"} />
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
                background: isScrolled ? "#1a202c" : "white",
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
                background: "#0A1128",
                padding: "2.5em 1.5em 0",
                fontSize: "1.15em",
                width: "100%",
              },
              bmMorphShape: {
                fill: "#0A1128",
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

        <ul className="flex flex-col sm:flex-row list-none -mx-4 my-0 text-xl hidden sm:flex">
          {menuLinks.map((menuItem) => (
            <li
              key={menuItem.name}
              className="mx-4 lowercase hover:text-brand-lightgreen"
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
