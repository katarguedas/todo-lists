import Input from "./Input";
import Todo from "./Todo";
import { StyledH2 } from "../styled/StyledH2";
import { StyledLink } from "../styled/GlobalStyles";

import styled from "styled-components";

import { useParams } from "react-router";

import { useTodoAppContext } from "../providers/TodoAppContext"

//--------------------------------------------------------

const List = ({ list }) => {
  const { todos, addTodo } = useTodoAppContext()

  const { id } = useParams();

  if ((id) && (todos !== undefined)) {
    const paramList = todos.find(e => e.id === id)
    if (paramList) {
      return (
        
        <StyledListGroup>
            <StyledList>
              <StyledH2>{paramList.title}</StyledH2>

              <Input listId={paramList.id} todos={todos} addTodo={addTodo} />
              {
                paramList.tasks.map(e => (
                  <Todo
                    task={e}
                    key={e.idi}
                    list={paramList} />
                ))
              }
            </StyledList>
        </StyledListGroup>
      )
    } else { return <div>404 Liste nicht gefunden</div> }
  } else if (todos !== undefined) {
    return (
      <StyledListGroup>
        <StyledList>
          <StyledLink to={`/list/${list.id}/`} ><StyledH2>{list.title}</StyledH2></StyledLink>

          <Input listId={list.id} todos={todos} addTodo={addTodo} />
          {
            list.tasks.map(e => (
              <Todo
                task={e}
                key={e.idi}
                list={list} />
            ))
          }
        </StyledList>
      </StyledListGroup>
      
    )
  }
}

export default List;

// styled component --------------

const StyledList = styled.div`
justify-content: center;
padding: 1.0rem;
min-width: 26rem;
max-width: 30rem;
border-radius: 0.75rem;
box-shadow: ${({ theme }) => theme.shadow};
  -webkit-box-shadow: ${({ theme }) => theme.shadow};
  -moz-box-shadow: ${({ theme }) => theme.shadow}; 
margin: 1.0rem;
`


const StyledListGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 80px;
`
