import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import { useScrollPosition } from "@n8tb1t/use-scroll-position"
import Container from "./container"
import LogoSVG from "../../svg/logo"

const Header = ({ menuLinks }) => {
  const [isScrolled, setScrolled] = useState(false)
  useScrollPosition(({ currPos }) => {
    const currentlyScrolled = Math.abs(currPos.y) > 50
    if (currentlyScrolled !== isScrolled) {
      setScrolled(currentlyScrolled)
    }
  })

  return (
    <HeaderLayout isScrolled={isScrolled}>
      <HeaderContainer as="nav" isScrolled={isScrolled}>
        <h1>
          <Link to="/">
            <LogoSVG />
          </Link>
        </h1>

        <NavMenuList>
          {menuLinks.map(menuItem => (
            <NavMenuListItem>
              <Link to={menuItem.link}>{menuItem.name}</Link>
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
  transition: background 0.5s ease;

  ${tw`border-b border-black fixed w-full`}

  ${props => props.isScrolled && tw`bg-white shadow`}
`

const HeaderContainer = styled(Container)`
  transition: padding 0.2s ease;

  ${tw`flex flex-row justify-between items-center py-4 md:py-10`}

  ${props => props.isScrolled && tw`py-0 md:py-0`}
`

const NavMenuList = styled.ul`
  ${tw`flex flex-col md:flex-row list-none -mx-4 my-0 text-xl`}
`

const NavMenuListItem = styled.li`
  ${tw`mx-4 lowercase`}
`
