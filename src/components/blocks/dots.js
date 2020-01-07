import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import PropTypes from "prop-types"
import Container from "../layout/container"
import Module from "../layout/module"
import PinkSwath from "../../svg/pink-swath"

const Dots = ({ dots }) => {
  return (
    <Module css={tw`relative`}>
      <DotsContainer>
        <div css={tw`relative`}>
          <Line />

          {dots.map(dot => (
            <DotItem key={dot.title}>
              <Dot />
              <DotTitle>{dot.title}</DotTitle>
              <DotText>{dot.description}</DotText>
            </DotItem>
          ))}
        </div>
      </DotsContainer>
      <PinkSwath
        style={{
          width: "100vw",
          height: "100%",
          position: "absolute",
          top: 0,
          zIndex: -1,
        }}
      />
    </Module>
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
  ${tw`absolute rounded-full bg-blue-400 left-0 h-3 w-3 z-10`}
`

const DotText = styled.h2`
  ${tw`text-2xl my-0 md:text-4xl md:w-2/5 font-normal`}
`

const DotTitle = styled.h5`
  ${tw`uppercase text-lg text-gray-600 font-normal m-0 mb-6`}
`

const DotsContainer = styled(Container)`
  ${tw`py-16 md:py-40`}
`

const DotItem = styled.article`
  ${tw`relative pl-10 pb-12 md:pb-32`}

  &:last-child {
    ${tw`pb-16`}
  }
`

const Line = styled.div`
  ${tw`absolute top-0 ml-1 w-1 h-full bg-black`}
`
