import styled from "styled-components"
import tw from "tailwind.macro"
import Container from "./container"

const TwoColumnSection = styled(Container)`
  ${tw`flex flex-col md:flex-row justify-between items-center py-32`}
`

const Column = styled.div`
  ${tw`md:w-1/2 flex flex-row justify-center`}
`

TwoColumnSection.Column = Column

export default TwoColumnSection
