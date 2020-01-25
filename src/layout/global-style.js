import { createGlobalStyle } from "styled-components"
import tw from "tailwind.macro"

const GlobalStyle = createGlobalStyle`
html {
  font-family: "Nunito";
  ${tw`text-gray-900`}
}

a,
a:active,
a:hover,
a:link,
a:visited {
  color: inherit;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  ${tw`font-medium`}
}
`

export default GlobalStyle
