import { GoTrashcan } from "react-icons/go";
import { GrCheckbox } from "react-icons/gr";
import { GrCheckboxSelected } from "react-icons/gr";
import Arrow from "./Arrow.js";
import styled from "styled-components";

//---------------------------------------------------------------

const Todo = ({ task, todos, setTodos, list }) => {

  const deleteTodo = (task) => {

    const taskIndex = list.tasks.findIndex(e => (e.idi) === task.idi)

    const t = [...todos];
    list.tasks.splice(taskIndex, 1);
    setTodos(t);
  }
  //.................
  const toggleCheck = () => {

    const t = [...todos];
    task.done = !task.done;
    setTodos(t);
  }

  //------------------

  return (
    <StyledTodoGroup>
      <StyledCheckbox onClick={toggleCheck} done={task.done.toString()} />
      <StyledCheckboxDone onClick={toggleCheck} done={task.done.toString()} />

      <StyledTodos done={task.done.toString()} >
        {task.text}
      </StyledTodos>
      <Arrow list={list} todos={todos} setTodos={setTodos} task={task} />

      < StyledTrash onClick={() => deleteTodo(task)} />
    </StyledTodoGroup>
  )
}
//---------------------------------------------------------------

export default Todo;

// styled component --------------

const StyledTodoGroup = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  position: relative;
  align-items: baseline;
  top: 10px;
  padding: 5px;
  border-bottom: 2px solid rgb(232, 222, 247);
`
const StyledTodos = styled.div`
  left: 45px;
  padding: 5px;
  font-family: 'Montserrat', 'Helvetica Neue',
  sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
  text-decoration: ${props => props.done === "true" ? "line-through" : "none"};
  &:hover {
    font-weight: 500;
  }
`
const StyledTrash = styled(GoTrashcan)`
  position: absolute;
  right: 5px;
  top: 12px;
`
const StyledCheckbox = styled(GrCheckbox)`
  display: ${props => props.done === "true" ? "none" : "block"};
  position: absolute;
  left: 5px;
  top: 12px;
`

const StyledCheckboxDone = styled(GrCheckboxSelected)`
  display: ${props => props.done === "true" ? "block" : "none"};
  position: absolute;
  left: 5px;
  top: 12px;
  `