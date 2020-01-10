import React, { useState, useEffect } from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"
import TwoColumnSection from "../layout/two-column-section"

const DataBlock = ({ title, description }) => {
  const [appeared, setAppeared] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.75,
  })
  const props = useSpring({
    config: { duration: 500 },
    delay: 300,
    opacity: appeared ? 1 : 0,
    transform: appeared ? "translateY(0)" : "translateY(50%)",
    from: { opacity: 0, transform: "translateY(50%)" },
  })

  useEffect(() => {
    if (inView) {
      setAppeared(inView)
    }
  }, [inView])

  return (
    <DataBlockItem ref={ref}>
      <animated.div style={props}>
        <DataBlockTitle>{title}</DataBlockTitle>
        <DataBlockText>{description}</DataBlockText>
      </animated.div>
    </DataBlockItem>
  )
}

const TwoColumnWithImage = ({ data }) => {
  return (
    <div css={tw`relative bg-pink-300`}>
      <TwoColumnSection css={tw`md:py-20`}>
        <TwoColumnSection.Row css={tw`flex-col-reverse lg:flex-row`}>
          <TwoColumnSection.Column vertical>
            {data.map(datum => (
              <DataBlock key={datum.title} {...datum} />
            ))}
          </TwoColumnSection.Column>
          <TwoColumnSection.Column css={tw`relative`}>
            <Image src="https://picsum.photos/500/500" />
          </TwoColumnSection.Column>
        </TwoColumnSection.Row>
      </TwoColumnSection>
    </div>
  )
}

TwoColumnWithImage.defaultProps = {
  data: [
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

TwoColumnWithImage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
}

export default TwoColumnWithImage

const DataBlockText = styled.h2`
  ${tw`text-2xl my-0 md:text-3xl font-normal`}
`

const DataBlockTitle = styled.h5`
  ${tw`uppercase text-lg font-normal m-0 mb-4`}
`

const Image = styled.img`
  transform: translateY(-50%);
  width: 60vw;
  ${tw`-mb-40`}
  ${tw`relative md:absolute object-cover rounded-full`};

  @media only screen and (min-width: 480px) {
    transform: translateY(-50%);
    width: 55%;
    ${tw`-mb-40`}
  }

  @media only screen and (min-width: 640px) {
    transform: translateY(-35%);
    width: 60%;
    ${tw`-mb-48`}
  }

  @media only screen and (min-width: 768px) {
    transform: translateY(-50%);
    width: 80%;
    max-width: 400px;
  }
`

const DataBlockItem = styled.article`
  ${tw`relative pt-10 md:py-8`}
`
