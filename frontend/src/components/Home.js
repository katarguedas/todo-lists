import List from "./List"

import { useTodoAppContext } from "../providers/TodoAppContext"

import styled from "styled-components"

// --------------------------------------------------

const Home = () => {

  const { todos } = useTodoAppContext()

  if (todos !== undefined) {
  return (
    <div>
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

    </div>
  )
      }
}


export default Home;

// styled component --------------

const StyledListGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 40px;
`


