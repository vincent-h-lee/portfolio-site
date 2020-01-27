import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"
import { bubble as Menu } from "react-burger-menu"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import Container from "./container"
import LinkArbiter from "../components/link-arbiter"
import LogoSVG from "../svg/logo"

const Header = ({ menuLinks }) => {
  const [isScrolled, setScrolled] = useState(false)
  useScrollPosition(({ currPos }) => {
    const currentlyScrolled = Math.abs(currPos.y) > 75
    if (currentlyScrolled !== isScrolled) {
      setScrolled(currentlyScrolled)
    }
  })

  return (
    <HeaderLayout isScrolled={isScrolled}>
      <HeaderContainer as="nav" isScrolled={isScrolled}>
        <h1 css={tw`m-0`}>
          <LinkArbiter to="/">
            <LogoSVG color={isScrolled ? undefined : "white"} />
          </LinkArbiter>
        </h1>

        <div css={tw`sm:hidden`}>
          <Menu
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
                background: "#2d3748",
                padding: "2.5em 1.5em 0",
                fontSize: "1.15em",
                width: "100%",
              },
              bmMorphShape: {
                fill: "#2d3748",
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
            <LinkArbiter to="/">Home</LinkArbiter>
            {menuLinks.map(menuItem => (
              <LinkArbiter
                to={menuItem.link}
                key={menuItem.name}
                file={menuItem.file}
              >
                {menuItem.name}
              </LinkArbiter>
            ))}
          </Menu>
        </div>

        <NavMenuList css={tw`hidden sm:flex`}>
          {menuLinks.map(menuItem => (
            <NavMenuListItem key={menuItem.name}>
              <LinkArbiter to={menuItem.link} file={menuItem.file}>
                {menuItem.name}
              </LinkArbiter>
            </NavMenuListItem>
          ))}
        </NavMenuList>
      </HeaderContainer>
    </HeaderLayout>
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

const HeaderLayout = styled.header`
  background: transparent;
  z-index: 99;
  transition: background 0.4s linear;

  ${tw`border-b border-black fixed w-full text-white`}

  ${props => props.isScrolled && tw`bg-white shadow-lg text-black`}
`

const HeaderContainer = styled(Container)`
  transition: padding 0.5s ease;

  ${tw`flex flex-row justify-between items-center py-12`}

  ${props => props.isScrolled && tw`py-3 md:py-4`}
`

const NavMenuList = styled.ul`
  ${tw`flex flex-col sm:flex-row list-none -mx-4 my-0 text-xl`}
`

const NavMenuListItem = styled.li`
  ${tw`mx-4 lowercase hover:text-gray-400`}
`
