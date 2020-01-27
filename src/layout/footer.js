import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"

import Container from "./container"
import LinkArbiter from "../components/link-arbiter"
import LogoSVG from "../svg/logo"
import Testimonial from "../components/testimonial"

const Footer = ({ mediaLinks, menuLinks, siteTitle, testimonial }) => (
  <FooterWrapper>
    <Container css={tw`flex flex-col md:flex-row justify-between`}>
      <section css={tw`flex flex-row md:w-1/2`}>
        <div css={tw`mr-12`}>
          <FooterMenuTitle>Sitemap</FooterMenuTitle>
          <FooterMenuList>
            {menuLinks.map(menuItem => (
              <FooterMenuListItem key={menuItem.name}>
                <LinkArbiter to={menuItem.link} file={menuItem.file}>
                  {menuItem.name}
                </LinkArbiter>
              </FooterMenuListItem>
            ))}
          </FooterMenuList>
        </div>

        <div>
          <FooterMenuTitle>Media</FooterMenuTitle>
          <FooterMenuList>
            {mediaLinks.map(menuItem => (
              <FooterMenuListItem key={menuItem.name}>
                <LinkArbiter to={menuItem.link} file={menuItem.file}>
                  {menuItem.name}
                </LinkArbiter>
              </FooterMenuListItem>
            ))}
          </FooterMenuList>
        </div>
      </section>
      <section css={tw`flex flex-col justify-between md:w-1/2`}>
        <div css={tw`flex flex-row justify-end`}>
          <div css={tw`w-full lg:w-10/12`}>
            {testimonial && <Testimonial {...testimonial} />}
          </div>
        </div>

        <div css={tw`text-right mt-12 md:mt-24`}>
          <h4>
            <LinkArbiter to="/" title={siteTitle}>
              <LogoSVG color="white" />
            </LinkArbiter>
          </h4>
          <p>Solutions Designer. Software Developer. Process Consultant.</p>
        </div>
      </section>
    </Container>
  </FooterWrapper>
)

Footer.propTypes = {
  mediaLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  menuLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      link: PropTypes.string,
    })
  ),
  siteTitle: PropTypes.string,
  testimonial: PropTypes.shape({
    attestant: PropTypes.string,
    quote: PropTypes.string,
  }),
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

const FooterWrapper = styled.footer`
  ${tw`bg-brand-secondary text-white py-10`}
`
