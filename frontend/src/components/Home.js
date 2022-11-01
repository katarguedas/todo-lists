import List from "./List"

import { useTodoAppContext } from "../providers/TodoAppContext"

import styled from "styled-components"

// --------------------------------------------------

const Home = () => {

  const { todos } = useTodoAppContext()

  console.log("todos:\n", todos)
  console.log(typeof todos)
  if (todos !== undefined) {
    const res = Array.isArray(todos)
    console.log("res:", res)

    return (
      <div>
        <StyledListGroup>
                <List list={todos[0]} key={todos[0].id} />
                <List list={todos[1]} key={todos[1].id} />
                <List list={todos[2]} key={todos[2].id} />
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


