import React, { Fragment } from 'react'



function TodoList({ item, handleDelete, editTodo }) {
  return (
    <Fragment>
      <li className="d-flex align-items-center justify-content-between">
        <h2>{item.task}</h2>
        <button onClick={() => handleDelete(item)} className="btn">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </button>
      </li>
    </Fragment>
  )
}

export default TodoList;