
import List from "./List"

import styled from "styled-components"


const Home = ({todos, setTodos }) => {
    console.log()
    return (

        <StyledListGroup>
            {
                todos ?
                    todos.map(e => (
                        <List list={e} key={e.id} todos={todos} setTodos={setTodos} />
                    ))
                    : null
            }
        </StyledListGroup>
    )
}


export default Home;

// styled component --------------

const StyledListGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
`