import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import tw from "tailwind.macro"

const Header = ({ menuLinks, siteTitle }) => (
  <header>
    <nav css={tw`flex flex-row justify-between w-full`}>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <ul css={tw`flex flex-row list-none -mx-4`}>
        {menuLinks.map(menuItem => (
          <li css={tw`mx-4 text-2xl`}>
            <Link to={menuItem.link}>{menuItem.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
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
