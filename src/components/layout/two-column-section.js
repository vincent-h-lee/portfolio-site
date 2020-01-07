import styled from "styled-components"
import tw from "tailwind.macro"
import Container from "./container"

const TwoColumnSection = styled(Container)`
  ${tw`flex flex-col md:flex-row justify-between items-center py-20 md:py-48`}
`

const Column = styled.div`
  ${tw`md:w-1/2 flex flex-row justify-center md:px-12`}

  ${props => props.vertical && tw`flex-col`}
`

TwoColumnSection.Column = Column

export default TwoColumnSection
