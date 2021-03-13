import React from 'react'

function Addtodo({ handleClick }) {
  return (
    <div className="add-todo">
      <p>Add Todo</p>
      <form onSubmit={handleClick}>
        <div className="form-group">
          <input type="text" name="todoData" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Add todo</button>
      </form>
    </div>
  )
}

export default Addtodo;