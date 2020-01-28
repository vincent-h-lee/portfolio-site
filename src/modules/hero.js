import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import styledMap from "styled-map"
import tw from "tailwind.macro"

import Arrow from "../svg/arrow"
import BaseButton from "../components/base-button"
import Container from "../layout/container"
import Module from "../layout/module"
import LinkArbiter from "../components/link-arbiter"

const Hero = ({ align, background, link, image, title, size, subtitle }) => {
  return (
    <Module>
      <ImageWrapper background={background}>
        {image && <Image src={image.src} alt={image.alt} />}
      </ImageWrapper>
      <HeroContainer align={align} color={background} size={size}>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        <Title>{title}</Title>

        {link && (
          <LinkArbiter to={link.url}>
            <HeroButton color="accent">
              {link.text}
              <Icon>
                <Arrow color="white" />
              </Icon>
            </HeroButton>
          </LinkArbiter>
        )}
      </HeroContainer>
    </Module>
  )
}

Hero.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
  background: PropTypes.oneOf(["primary", "secondary"]),
  image: PropTypes.shape({
    alt: PropTypes.string,
    src: PropTypes.string,
  }),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

export default Hero

const Image = styled.img`
  ${tw`object-cover w-full h-full object-cover relative`}
`

const ImageWrapper = styled.div`
  z-index: -1;
  ${tw`w-full h-full absolute top-0 bottom-0 left-0 right-0`}

  ${styledMap("background", {
    primary: tw`bg-brand-primary`,
    secondary: tw`bg-brand-secondary`,
    default: tw`bg-brand-primary`,
  })}

  &:after {
    content: "";
    ${tw`absolute top-0 left-0 w-full h-full opacity-50 bg-gray-800`}
  }
`

const HeroContainer = styled(Container)`
  ${tw`w-full md:w-3/5`}

  text-align: ${styledMap("align", {
    left: "left",
    right: "right",
    center: "center",
    default: "left",
  })};

  ${styledMap("size", {
    sm: tw`py-20`,
    md: tw`py-32`,
    lg: tw`py-48`,
    xl: tw`py-56`,
    default: tw`py-48`,
  })}

  ${styledMap("color", {
    primary: tw`text-white`,
    secondary: tw`text-white`,
    default: tw`text-white`,
  })}
`

const HeroButton = styled(BaseButton)`
  &:hover {
    span {
      transform: translateX(25%);
    }
  }
`

const Icon = styled.span`
  transition: transform 0.2s ease-in;
  transform: translateX(-5%);
  ${tw`inline-block ml-8`}
`

const Subtitle = styled.h5`
  ${tw`uppercase tracking-widest font-normal text-medium text-brand-accent`}
`

const Title = styled.h1`
  ${tw`text-5xl font-semibold tracking-wide`}
`
