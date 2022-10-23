import useLists from "../hooks/useTodos";

import { createContext, useContext } from "react";
import usePosts from "../hooks/usePosts";
//-----------------------------------------------------------

const TodoAppContext = createContext();

const useTodoAppContext = () => useContext(TodoAppContext);

const TodoAppContextProvider = ({ children }) => {
    const [todos, setTodos, toggleTodo, deleteTodo, addTodo, moveAndDelete] = useLists();
    const [posts, setPosts, addPost, deletePost] = usePosts();

    return (
        <TodoAppContext.Provider value = {{ todos, setTodos, toggleTodo, deleteTodo, addTodo, moveAndDelete, posts, setPosts, addPost, deletePost }} >
            {children}
        </TodoAppContext.Provider>
    )
}

export { TodoAppContextProvider, useTodoAppContext}