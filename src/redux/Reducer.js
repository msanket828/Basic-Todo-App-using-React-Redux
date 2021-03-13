

const initialState = {
  todoList: [
    { task: 'do homework' }
  ]

}

const reducer = function getUsers(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_TOTO':
      return {
        ...state
      }

    case 'ADD_TODO':
      return {
        todoList: [
          ...state.todoList,
          { task: action.data }
        ]
      }

    case 'DELETE_TODO':
      return {
        todoList: state.todoList.filter((data) => data !== action.data)
      }


    default:
      return state
  }
}

export default reducer;