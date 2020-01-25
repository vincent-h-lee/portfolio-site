import React, { useState, useEffect } from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import PropTypes from "prop-types"
import { useInView } from "react-intersection-observer"
import { useSpring, animated } from "react-spring"
import Container from "../layout/container"
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

const ListWithImage = ({ data, description, title }) => {
  return (
    <section css={tw`relative py-24`}>
      <Container css={tw`text-center mb-20 md:w-2/3 lg:w-1/2`}>
        <h2 css={tw`text-4xl font-medium tracking-widest uppercase`}>
          {title}
        </h2>
        <p css={tw`text-medium leading-relaxed`}>{description}</p>
      </Container>
      <TwoColumnSection>
        <TwoColumnSection.Row css={tw`flex-col-reverse lg:flex-row`}>
          <TwoColumnSection.Column vertical>
            {data.map(datum => (
              <DataBlock key={datum.title} {...datum} />
            ))}
          </TwoColumnSection.Column>
          <TwoColumnSection.Column css={tw`flex justify-center items-center`}>
            <Image src="https://picsum.photos/500/500" />
          </TwoColumnSection.Column>
        </TwoColumnSection.Row>
      </TwoColumnSection>
    </section>
  )
}

ListWithImage.defaultProps = {
  data: [],
}

ListWithImage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.objectOf({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  description: PropTypes.string,
  title: PropTypes.string,
}

export default ListWithImage

const DataBlockText = styled.h2`
  ${tw`text-lg my-0 md:text-xl font-normal`}
`

const DataBlockTitle = styled.h5`
  ${tw`uppercase text-medium font-semibold m-0 mb-4 text-gray-600`}
`

const Image = styled.img`
  ${tw`w-full md:w-2/3 object-cover rounded-full`}
`

const DataBlockItem = styled.article`
  ${tw`relative pt-10 md:py-8`}
`
