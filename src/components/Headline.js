import styled from "styled-components";

const Headline = () => {
    return (
            <StyledH1>Meine Todo Listen</StyledH1>
    )
}

export default Headline;

// styled component --------------

const StyledH1 = styled.h1`
  display: inline-block;
  font-family: 'Mali', sans-serif;
  font-size: 2.5rem;
`