import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components"
import PropTypes from "prop-types"

export const SlantCardProps = {
  description: PropTypes.string,
  image: PropTypes.objectOf({
    alt: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
  }),
  link: PropTypes.string,
  title: PropTypes.string,
}

const SlantCard = ({ subtitle, title, image }) => {
  return (
    <SlantCardWrapper>
      <SkewedImageWrapper>
        <SkewedImage src={image.src} alt={image.alt} title={image.title} />
      </SkewedImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <Text>{subtitle}</Text>
      </ContentWrapper>
    </SlantCardWrapper>
  )
}

SlantCard.defaultProps = {
  subtitle: "Senior Fullstack Developer",
  image: {
    alt: "image alt",
    src: "https://picsum.photos/500/300",
    title: "image title",
  },
  link: "/",
  title: "Briteweb",
}

SlantCard.propTypes = SlantCardProps

export default SlantCard

const SkewedImage = styled.img`
  ${tw`rounded-l w-full object-cover h-full`}
`

const SkewedImageWrapper = styled.div`
  ${tw`relative md:w-2/5 lg:w-1/4 overflow-hidden`}

  &::after {
    content: "";
    height: 15%;
    transform: skewY(-3deg);
    transform-origin: 100%;
    ${tw`absolute block w-full bg-white bottom-0 right-0 z-10`}

    @media only screen and (min-width: 768px) {
      ${tw`h-full w-1/2`}
      transform: skewY(100deg);
    }
  }
`

const ContentWrapper = styled.div`
  ${tw`pl-4 pt-8 pb-10 md:py-12 flex flex-col justify-center`}
`

const SlantCardWrapper = styled.article`
  ${tw`flex flex-col shadow-lg bg-white rounded md:flex-row`}
`

const Title = styled.h4`
  ${tw`text-2xl md:text-xl lg:text-2xl font-bold m-0`}
`

const Text = styled.p`
  ${tw`text-xl md:text-lg lg:text-xl m-0`}
`
