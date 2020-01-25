import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import tw from "tailwind.macro"
import Container from "../layout/container"
import Module from "../layout/module"
import styledMap from "styled-map"

const Intro = ({ color, text }) => {
  return (
    <Module>
      <IntroContainer>
        <Text color={color}>{text}</Text>
      </IntroContainer>
    </Module>
  )
}

Intro.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Intro

const IntroContainer = styled(Container)`
  ${tw`py-32 md:py-16`}
`

const Text = styled.h2`
  ${tw`text-4xl md:text-5xl md:w-4/5 font-medium`}

  ${styledMap("color", {
    white: tw`text-white`,
  })}
`
