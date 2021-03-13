

const loadTodo = (data) => {
  return {
    type: 'LOAD_TODO',
    data
  }
}

const addTodo = (data) => {
  return {
    type: 'ADD_TODO',
    data
  }
}

const deleteTodo = (data) => {
  return {
    type: 'DELETE_TODO',
    data
  }
}

const editTodo = (data) => {
  return {
    type: 'EDIT_TODO',
    data
  }
}


export { loadTodo, addTodo, deleteTodo };