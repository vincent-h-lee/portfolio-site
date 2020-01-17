import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import styledMap from "styled-map"
import tw from "tailwind.macro"

import Container from "../layout/container"
import Module from "../layout/module"

const Hero = ({ align, title, description }) => {
  return (
    <HeroModule>
      <HeroImage src="https://picsum.photos/800/500" />
      <HeroContainer align={align}>
        <h1>{title}</h1>
        <p>{description}</p>
      </HeroContainer>
    </HeroModule>
  )
}

Hero.propTypes = {
  align: PropTypes.oneOf(["left", "center", "right"]),
}

export default Hero

const HeroImage = styled.img`
  z-index: -1;
  ${tw`w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover`}
`

const HeroModule = styled(Module)`
  ${tw`relative`}
`

const HeroContainer = styled(Container)`
  ${tw`py-16`}
  text-align: ${styledMap("align", {
    left: "left",
    right: "right",
    center: "center",
    default: "left",
  })};
`
