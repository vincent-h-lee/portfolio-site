import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import Container from "./container"
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
          <Link to="/">
            <LogoSVG color={isScrolled ? undefined : "white"} />
          </Link>
        </h1>

        <NavMenuList>
          {menuLinks.map(menuItem => (
            <NavMenuListItem>
              {menuItem.download ? (
                <a href={menuItem.link} download>
                  {menuItem.name}
                </a>
              ) : (
                <Link to={menuItem.link}>{menuItem.name}</Link>
              )}
            </NavMenuListItem>
          ))}
        </NavMenuList>
      </HeaderContainer>
    </HeaderLayout>
  )
}

Header.propTypes = {
  menuLinks: PropTypes.arrayOf({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
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

  ${props => props.isScrolled && tw`py-2 md:py-4`}
`

const NavMenuList = styled.ul`
  ${tw`flex flex-col md:flex-row list-none -mx-4 my-0 text-xl`}
`

const NavMenuListItem = styled.li`
  ${tw`mx-4 lowercase hover:text-gray-400`}
`
