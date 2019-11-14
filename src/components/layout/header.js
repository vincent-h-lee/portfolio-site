import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tw from "tailwind.macro"
import Container from "./container"
import LogoSVG from "../../svg/logo"

const Header = ({ menuLinks, siteTitle }) => (
  <Container as="header">
    <nav css={tw`flex flex-row justify-between items-center py-4`}>
      <h1>
        <Link to="/">
          <LogoSVG />
        </Link>
      </h1>

      <ul css={tw`flex flex-col md:flex-row list-none -mx-4 my-0`}>
        {menuLinks.map(menuItem => (
          <li css={tw`mx-4 text-2xl`}>
            <Link to={menuItem.link}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </Container>
)

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
