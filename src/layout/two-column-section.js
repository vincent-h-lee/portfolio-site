import styled from "styled-components"
import tw from "tailwind.macro"
import Container from "./container"
import Module from "./module"

const TwoColumnSection = styled(Module)`
  ${tw`flex flex-col w-full md:flex-row justify-center items-center`}
`
const Column = styled.div`
  ${tw`pb-16 md:pb-0 md:w-1/2`}
`

const Row = styled(Container)`
  ${tw`w-full flex flex-col md:flex-row`}

  ${props => props.reverse && tw`flex-col-reverse md:flex-row-reverse`}
`

TwoColumnSection.Column = Column
TwoColumnSection.Row = Row

export default TwoColumnSection
