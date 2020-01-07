import React from "react"
import tw from "tailwind.macro"
import styled from "styled-components"
import PropTypes from "prop-types"

const SlantCard = ({ description, title, image }) => {
  return (
    <article css={tw`flex flex-col shadow-lg bg-white rounded md:flex-row`}>
      <div css={tw`relative md:w-1/4`}>
        <img
          src={image.src}
          alt={image.alt}
          title={image.title}
          css={tw`rounded-l w-full object-cover h-full`}
        />
        <SkewedImageSVG
          css={tw`absolute top-0 h-full`}
          style={{ right: "-1px" }}
        />
      </div>
      <div css={tw`pl-4 py-12 flex flex-col justify-center`}>
        <h4 css={tw`text-3xl font-bold m-0`}>{title}</h4>
        <p css={tw`text-2xl m-0`}>{description}</p>
      </div>
    </article>
  )
}

SlantCard.defaultProps = {
  description: "Senior Fullstack Developer",
  image: {
    alt: "image alt",
    src: "https://picsum.photos/500/300",
    title: "image title",
  },
  link: "/",
  title: "Briteweb",
}

SlantCard.propTypes = {
  description: PropTypes.string,
  image: PropTypes.objectOf({
    alt: PropTypes.string,
    src: PropTypes.string,
    title: PropTypes.string,
  }),
  link: PropTypes.string,
  title: PropTypes.string,
}

export default SlantCard

const SkewedImageSVG = props => {
  return (
    <svg
      width="64px"
      height="215px"
      viewBox="0 0 64 215"
      version="1.1"
      preserveAspectRatio="none"
      {...props}
    >
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="Home"
          transform="translate(-274.000000, -2191.000000)"
          fill="#FFFFFF"
        >
          <g id="Group-10" transform="translate(117.000000, 2191.000000)">
            <polygon
              id="Path"
              points="220.876089 0 220.876089 215 157.068908 215"
            ></polygon>
          </g>
        </g>
      </g>
    </svg>
  )
}
