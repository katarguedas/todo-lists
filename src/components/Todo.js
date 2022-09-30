import { GoTrashcan } from "react-icons/go";
import { GrCheckbox } from "react-icons/gr";
import { GrCheckboxSelected } from "react-icons/gr";
// import Arrows from "./Arrows.js";


//---------------------------------------------------------------

const Todo = ({ task, todos, setTodos, todoId }) => {

    const deleteTodo = id => {

        const t = [...todos];

        for (let i = 0; i < t.length; i++) {
            for (let n = 0; n < t[i].tasks.length; n++) {
                if (t[i].tasks[n].idi === todoId) {
                    t[i].tasks.splice(n, 1);
                }
            }
        }
        setTodos(t);
    }
   //.................
    const toggleCheck = () => {

        const t = [...todos];
        task.done = !task.done;
        setTodos(t);
        // console.log(todos)
    }

    //------------------

   
    //...........

    return (
        <div className="todoGroup">
            <GrCheckbox onClick={toggleCheck} style={ task.done === true ?  {display: "none"} : {} } className="checkBox"/>
            <GrCheckboxSelected onClick={toggleCheck} style={ task.done === false ? {display: "none"} : {} } className="checkBox" />
            <span className="todos" style={task.done === true ? {textDecoration: "line-through"} : {}} >{task.text}</span>
            {/* <Arrows todos={todos} className="arrowRight" /> */}
            {/* < TiArrowRightOutline className="arrowRight"/> */}
            < GoTrashcan onClick={deleteTodo} className="trash" />
        </div>
    )
}
//---------------------------------------------------------------

export default Todo;

