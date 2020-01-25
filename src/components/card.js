import React from "react"
import styled from "styled-components"
import tw from "tailwind.macro"
import PropTypes from "prop-types"
import LinkArbiter from "./link-arbiter"

const Card = ({ description, image, link, title }) => {
  return (
    <LinkArbiter to={link}>
      <CardContainer>
        <CardImageContainer>
          <img
            css={tw`w-full object-cover h-full`}
            src={image.src}
            alt={image.alt}
            title={image.title}
          />
        </CardImageContainer>
        <div css={tw`px-4 py-5`}>
          <h5 css={tw`uppercase m-0 font-bold`}>{title}</h5>
          <p>{description}</p>
        </div>
      </CardContainer>
    </LinkArbiter>
  )
}

Card.defaultProps = {
  image: {
    alt: "image alt",
    src: "https://picsum.photos/500/300",
    title: "image title",
  },
}

Card.propTypes = {
  description: PropTypes.string,
  image: PropTypes.objectOf({
    alt: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
  }),
  link: PropTypes.string,
  title: PropTypes.string,
}

export default Card

const CardImageContainer = styled.div`
  height: 322px;

  ${tw`rounded-t-lg overflow-hidden`}

  img {
    transition: transform ease 0.5s;
  }
`

const CardContainer = styled.article`
  transition: color ease 0.5s;
  min-width: 300px;
  max-width: 385px;
  min-height: 525px;
  max-height: 525px;

  ${tw`w-full shadow-xl rounded-lg bg-white border border-gray-600`}

  &:hover {
    ${tw`border-l border-blue-600 border`}

    ${CardImageContainer} {
      img {
        transform: scale(1.15);
      }
    }
  }
`
