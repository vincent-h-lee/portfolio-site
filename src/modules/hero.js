import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"

import Container from "../layout/container"
import CTA from "../components/cta"
import Module from "../layout/module"

const Hero = () => {
  return (
    <Module css={tw`relative py-48`}>
      <HeroImage src="https://picsum.photos/1000/500" />
      <Container>
        <CTA />
      </Container>
    </Module>
  )
}

export default Hero

const HeroImage = styled.img`
  ${tw`w-full h-full absolute top-0 bottom-0 left-0 right-0 object-cover`}
`
