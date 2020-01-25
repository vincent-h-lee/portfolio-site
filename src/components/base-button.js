import styled from "styled-components"
import styledMap from "styled-map"
import PropTypes from "prop-types"
import tw from "tailwind.macro"

const BaseButton = styled.button`
  ${tw`px-6 py-4 font-medium text-lg border-0 rounded-sm shadow hover:cursor-pointer`}

  ${props => props.full && tw`w-full`}

  ${styledMap("color", {
    accent: tw`bg-brand-accent border-brand-accent text-white hover:bg-blue-500`,
    primary: tw`bg-brand-primary border-brand-primary text-white hover:bg-blue-900`,
    default: "",
  })}
`

BaseButton.propTypes = {
  color: PropTypes.oneOf(["accent", "primary"]),
  full: PropTypes.bool,
}

export default BaseButton
