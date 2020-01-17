import styled from "styled-components"

const Container = styled.div`
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;
  box-sizing: border-box;

  @media only screen and (min-width: 640px) {
    max-width: 640px;
  }

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1024px;
  }

  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`
export default Container
