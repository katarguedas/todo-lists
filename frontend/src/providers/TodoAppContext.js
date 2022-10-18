import useLists from "../hooks/useTodos";

import { createContext, useContext } from "react";
//-----------------------------------------------------------

const TodoAppContext = createContext();

const useTodoAppContext = () => useContext(TodoAppContext);

const TodoAppContextProvider = ({ children }) => {
    const [todos, setTodos, toggleTodo, deleteTodo, addTodo, moveAndDelete] = useLists();

    return (
        <TodoAppContext.Provider value = {{ todos, setTodos, toggleTodo, deleteTodo, addTodo, moveAndDelete }} >
            {children}
        </TodoAppContext.Provider>
    )
}

export { TodoAppContextProvider, useTodoAppContext}