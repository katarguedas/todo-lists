import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

//---Variables ----------------------------------
const LOCAL_STORAGE_KEY = "local_storage_lists"

const listArrayInit = [
  {
    id: uuidv4(),
    title: "Heute",
    tasks: []
  },
  {
    id: uuidv4(),
    title: "Morgen",
    tasks: []
  },
  {
    id: uuidv4(),
    title: "Demnächst",
    tasks: []
  }
]

//----------------------------------------------------
const useLists = () => {

  const [todos, setTodos] = useState();

  //....................................
  const saveTodolistsToLocalStorage = (todos) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }

  //....................
  const loadTodoListsFromLocalStorage = () => {
    if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) === null) {
      return listArrayInit
    } else {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    }
  }

  //-- useEffects ---------------------------------- 
  useEffect(() => {
    const lists = loadTodoListsFromLocalStorage()
    setTodos(lists)
  }, [])

  //....
  useEffect(() => {
    if (todos) {
      saveTodolistsToLocalStorage(todos)
    }
  }, [todos])

  //--- functions  --------------------------------  
  const addTodo = (index, text) => {
    const t = [...todos];
    t[index].tasks.push({
      idi: uuidv4(),
      text: text,
      done: false
    })
    setTodos(t);
  }

  //........................
  const toggleTodo = task => {
    const t = [...todos];
    task.done = !task.done;
    setTodos(t);
  }

  //......................
  const deleteTodo = (list, index) => {
    const t = [...todos];
    list.tasks.splice(index, 1);
    setTodos(t);
  }
  //..........................
  const moveAndDelete = (array, index, direction, listIndex) => {
  const t = [...todos]
        t[listIndex + direction].tasks.push(array)
        t[listIndex].tasks.splice(index, 1)
        setTodos(t)
      }

  return [todos, setTodos, toggleTodo, deleteTodo, addTodo, moveAndDelete]

}

export default useLists;