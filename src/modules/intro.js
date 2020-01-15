import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"
import Container from "../layout/container"
import Module from "../layout/module"

const Intro = ({ text }) => (
  <Module>
    <IntroContainer>
      <Text>{text}</Text>
    </IntroContainer>
  </Module>
)

Intro.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Intro

const IntroContainer = styled(Container)`
  ${tw`pt-16 pb-24 xl:py-40`}
`

const Text = styled.h2`
  ${tw`text-5xl md:w-4/5 font-medium`}
`
