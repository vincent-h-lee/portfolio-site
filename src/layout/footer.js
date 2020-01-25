import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"

import Container from "./container"
import LinkArbiter from "../components/link-arbiter"
import LogoSVG from "../svg/logo"
import Testimonial from "../components/testimonial"

const Footer = ({ mediaLinks, menuLinks, siteTitle, testimonial }) => (
  <footer css={tw`bg-brand-secondary text-white`}>
    <Container css={tw`flex flex-col md:flex-row justify-between py-10`}>
      <section css={tw`flex flex-row md:w-1/2`}>
        <div css={tw`mr-12`}>
          <FooterMenuTitle>Sitemap</FooterMenuTitle>
          <FooterMenuList>
            {menuLinks.map(menuItem => (
              <FooterMenuListItem key={menuItem.name}>
                <LinkArbiter to={menuItem.link}>{menuItem.name}</LinkArbiter>
              </FooterMenuListItem>
            ))}
          </FooterMenuList>
        </div>

        <div>
          <FooterMenuTitle>Media</FooterMenuTitle>
          <FooterMenuList>
            {mediaLinks.map(menuItem => (
              <FooterMenuListItem key={menuItem.name}>
                <LinkArbiter to={menuItem.link}>{menuItem.name}</LinkArbiter>
              </FooterMenuListItem>
            ))}
          </FooterMenuList>
        </div>
      </section>
      <section css={tw`flex flex-col justify-between md:w-1/2`}>
        <div css={tw`flex flex-row justify-end`}>
          <div css={tw`w-full lg:w-10/12`}>
            <Testimonial {...testimonial} />
          </div>
        </div>

        <div css={tw`text-right mt-12 md:mt-24`}>
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
  testimonial: PropTypes.shape({
    attestant: PropTypes.string,
    quote: PropTypes.string,
  }),
}

Footer.defaultProps = {
  menuLinks: [],
  testimonial: {},
}

export default Footer

const FooterMenuTitle = styled.h5`
  ${tw`uppercase mb-8`}
`

const FooterMenuList = styled.ul`
  ${tw`p-0 flex flex-col list-none`}
`

const FooterMenuListItem = styled.li`
  ${tw`text-normal pb-4 font-thin hover:text-gray-500`}
`
