import styled from "styled-components";

const Headline = () => {
    return (
        <div>
            <StyledH1>Meine Todo Listen</StyledH1>
        </div>
    )
}

export default Headline;

// styled component --------------

const StyledH1 = styled.h1`
  font-family: 'Mali', sans-serif;
  font-size: 2.5rem;
`