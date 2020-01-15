import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import tw from "tailwind.macro"

import Container from "./container"
import LinkArbiter from "../components/link-arbiter"
import LogoSVG from "../svg/logo"
import Testimonial from "../components/testimonial"

const Footer = ({ mediaLinks, menuLinks, siteTitle }) => (
  <footer css={tw`bg-black text-white`}>
    <Container css={tw`flex flex-col md:flex-row justify-between py-10`}>
      <section css={tw`flex flex-row md:w-1/2`}>
        <div css={tw`mr-12`}>
          <h5 css={tw`uppercase`}>Sitemap</h5>
          <ul css={tw`p-0 flex flex-col list-none`}>
            {menuLinks.map(menuItem => (
              <li css={tw`text-xl pb-4 font-thin`} key={menuItem.name}>
                <LinkArbiter to={menuItem.link}>{menuItem.name}</LinkArbiter>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 css={tw`uppercase`}>Media</h5>
          <ul css={tw`p-0 flex flex-col list-none`}>
            {mediaLinks.map(menuItem => (
              <li css={tw`text-xl pb-4 font-thin`} key={menuItem.name}>
                <LinkArbiter to={menuItem.link}>{menuItem.name}</LinkArbiter>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section css={tw`flex flex-col justify-between md:w-1/2`}>
        <div css={tw`flex flex-row justify-end`}>
          <div css={tw`w-full md:w-2/3`}>
            <Testimonial />
          </div>
        </div>

        <div css={tw`text-right mt-24`}>
          <h4>
            <LogoSVG color="white" />
          </h4>
          <p>Solutions First. Software Engineer. Change Consultant.</p>
        </div>
      </section>
    </Container>
  </footer>
)

Footer.propTypes = {
  mediaLinks: PropTypes.arrayOf({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
  menuLinks: PropTypes.arrayOf({
    name: PropTypes.string,
    link: PropTypes.string,
  }),
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  menuLinks: [],
  siteTitle: ``,
}

export default Footer
