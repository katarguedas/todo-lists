import { IoTerminal } from "react-icons/io5";
import Input from "./Input";
import Todo from "./Todo";
 
//--------------------------------------------------------


const List = ({head, listId, items, todos, setTodos}) => {

    return (
        <div className="list">
            <h2>{head}</h2>
            <hr></hr>
            <Input listId={listId} todos={todos} setTodos={setTodos} />
            {
                items.map(e => (
                    <Todo task={e} key={e.idi} todos={todos} setTodos={setTodos} todoId={e.idi} />
                ))
            }
                
        </div>
    );
}

export default List;
