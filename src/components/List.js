import Input from "./Input";
import Todo from "./Todo";
import styled from "styled-components";
 
//--------------------------------------------------------


const List = ({list, todos, setTodos}) => {

    return (
        <StyledList>
            <StyledH2>{list.title}</StyledH2>
            <hr></hr>
            
            <Input listId={list.id} todos={todos} setTodos={setTodos} />
            {
                list.tasks.map(e => (
                    <Todo task={e} key={e.idi} todos={todos} setTodos={setTodos} todoId={e.idi} list={list} />
                ))
            }          
        </StyledList>
    );
}

export default List;

// styled component --------------

const StyledH2 = styled.h2`
  font-family: 'Mali', 'sans-serif';
  font-size: 1.5rem;
  margin-bottom:1.0rem;
`

const StyledList = styled.div`
  padding: 1.0rem;
  min-width: 25rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.4); 
    -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.4); 
    -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.4); 
  margin: 1.0rem;
`