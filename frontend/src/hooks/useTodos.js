import { useState, useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';

//---Variables ----------------------------------
// const LOCAL_STORAGE_KEY = "local_storage_lists"

// const listArrayInit = [
//   {
//     id: uuidv4(),
//     title: "Heute",
//     tasks: []
//   },
//   {
//     id: uuidv4(),
//     title: "Morgen",
//     tasks: []
//   },
//   {
//     id: uuidv4(),
//     title: "Demnächst",
//     tasks: []
//   }
// ]

//----------------------------------------------------
const useLists = () => {

  const [todos, setTodos] = useState();

  // lade Daten aus dem Backend:---------------------
  const loadTodosFromBackend = async () => {

    var config = {
      method: 'get',
      url: '/todolists',
      headers: {}
    };

    const response = await axios(config);
    console.log(response.data);

    return (response.data);


  }

  useEffect(() => {
    loadTodosFromBackend().then(res => {
      setTodos(res);
    })
  }, [])

  // ------------------------------------------------

  // füge ein Todo insBackend ein:---------------------
  const addTodoToBackend = async (todo, listId) => {

    console.log("Todo: ", todo)

    var config = {
      method: 'post',
      url: '/todo?listId=' + listId,
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify(todo)
    };
    const response = await axios(config);

    return (response.data);
  }

  const addTodo = (index, text) => {
    const t = [...todos];
    const todo = {
      idi: uuidv4(),
      text: text,
      done: false
    }
    t[index].tasks.push(todo)
    const listId = todos[index].id;
    setTodos(t);

    addTodoToBackend(todo, listId)
  }
  // ------------------------------------------------

  // toggle Todo im Backend:--------------------------

  const toggleTodoAtBackend = async (id, index) => {
    index = index + 1;
    var config = {
      method: 'put',
      url: '/toggletodo?id=' + id + '&listnr=' + index,
      headers: {}
    };
    const response = await axios(config);

    return (response.data);
  }

  const toggleTodo = (task, index) => {
    const t = [...todos];
    task.done = !task.done;
    setTodos(t);
    toggleTodoAtBackend(task.idi, index)
  }
  // ------------------------------------------------

  // lösche ein Todo im Backend:----------------------

  const deleteTodoFromBackend = async (id, index) => {
    index = index + 1;
    var config = {
      method: 'delete',
      url: '/deletetodo?id=' + id + '&listnr=' + index,
      headers: {}
    };
    const response = await axios(config);

    return (response.data);
  }

  const deleteTodo = (list, taskIndex, listIndex) => {
    const t = [...todos];
    deleteTodoFromBackend(list.tasks[taskIndex].idi, listIndex);
    list.tasks.splice(taskIndex, 1);
    setTodos(t);
  }
  // ------------------------------------------------

  // verschiebe ein Todo im Backend:----------------------


  const moveAndDelete = (array, taskIndex, direction, listId) => {

    const listIndex = todos.findIndex(e => (e.id) === listId)
    deleteTodoFromBackend(todos[listIndex].tasks[taskIndex].idi, listIndex);
    const newListId = todos[listIndex + direction].id;
    addTodoToBackend(array, newListId);

    const t = [...todos]
    t[listIndex + direction].tasks.push(array)
    t[listIndex].tasks.splice(taskIndex, 1)
    setTodos(t)
  }

  return [todos, setTodos, toggleTodo, deleteTodo, addTodo, moveAndDelete]

}

export default useLists;