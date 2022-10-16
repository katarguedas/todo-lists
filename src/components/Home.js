import List from "./List"

import styled from "styled-components"

import { useTodoAppContext } from "../providers/TodoAppContext"
// --------------------------------------------------

const Home = () => {
const {todos} = useTodoAppContext()
    return (
        <StyledListGroup>
            {
                todos ?
                    todos.map(e => (
                        <List
                            list={e}
                            key={e.id} />
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