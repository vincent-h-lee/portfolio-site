import styled from "styled-components"
import tw from "tailwind.macro"
import Container from "./container"

const TwoColumnSection = styled(Container)`
  ${tw`flex flex-col w-full md:flex-row justify-between items-center py-20 md:py-48`}
`
const Column = styled.div`
  ${tw`flex flex-row justify-center pb-16 md:pb-0 md:w-1/2 md:px-12`}

  ${props => props.vertical && tw`flex-col`}
`

const Row = styled.div`
  ${tw`w-full flex flex-col md:flex-row`}
`

TwoColumnSection.Column = Column
TwoColumnSection.Row = Row

export default TwoColumnSection
