import Input from "./Input";
import Todo from "./Todo";

import styled from "styled-components";

import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { useTodoAppContext } from "../providers/TodoAppContext"

//--------------------------------------------------------

const List = ({ list}) => {
  const {todos, addTodo} = useTodoAppContext()

  const { id } = useParams();

  if ((id) && (todos !==undefined)) {
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
    )
  }
}

export default List;

// styled component --------------

const StyledH2 = styled.h2`
  font-family: 'Mali', 'sans-serif';
  color: rgb(96, 116, 189);
  font-size: 1.5rem;
  padding-bottom: 10px;
  margin-bottom:1.0rem;
  text-decoration: none;
  border-bottom: 1px solid rgb(96, 116, 189);
  &:hover {
    color: rgb(147, 142, 234);
  }
`

const StyledList = styled.div`
  justify-content: center;
  padding: 1.0rem;
  min-width: 26rem;
  max-width: 30rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.4); 
    -webkit-box-shadow: 0 0 25px rgba(96, 116, 189, 0.4); 
    -moz-box-shadow: 0 0 30px rgba(96, 116, 189, 0.4); 
  margin: 1.0rem;
  
`

const StyledListGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  column-gap: 200px;
  `

const StyledLink = styled(Link)`
  text-decoration: none;
  color: rgb(96, 116, 189);
`