import { createGlobalStyle} from "styled-components"
import styled from "styled-components";
import { Link } from "react-router-dom";


const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Mali', 'Montserrat', 'sans-serif';
    transition: all 0.40s linear;
  }
  `
 

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #ef476f;
`

export default GlobalStyles;