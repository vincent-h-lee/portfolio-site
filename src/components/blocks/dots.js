import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import PropTypes from "prop-types"
import Container from "../layout/container"
import PinkSwath from "../../svg/pink-swath"

const Dots = ({ dots }) => {
  return (
    <section css={tw`relative`}>
      <Container>
        {dots.map(dot => (
          <article css={tw`relative md:pl-10 md:pb-32`}>
            <Dot />

            <h2 css={tw`uppercase text-lg text-gray-600 font-normal`}>
              {dot.title}
            </h2>
            <p css={tw`text-4xl md:w-2/3`}>{dot.description}</p>
          </article>
        ))}
      </Container>
      <PinkSwath
        style={{
          width: "100vw",
          height: "100%",
          position: "absolute",
          top: 0,
          zIndex: -1,
        }}
      />
    </section>
  )
}

Dots.defaultProps = {
  dots: [
    {
      title: "Solutions First",
      description:
        "Connecting the dots between business challenges and technical solutions",
    },
    {
      title: "Solutions First",
      description:
        "Connecting the dots between business challenges and technical solutions",
    },
    {
      title: "Solutions First",
      description:
        "Connecting the dots between business challenges and technical solutions",
    },
  ],
}

Dots.propTypes = {
  dots: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default Dots

const Dot = styled.div`
  top: 0.5rem;
  ${tw`absolute rounded-full bg-blue-400 left-0 h-3 w-3`}
`
