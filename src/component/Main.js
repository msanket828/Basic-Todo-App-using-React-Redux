import React, { Fragment } from 'react'
import { loadTodo, addTodo, deleteTodo } from '../redux/Action'
import TodoList from '../component/TodoList'
import './CSS/Main.css'
import Addtodo from './Addtodo'

class Main extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.dispatch(loadTodo())
  }

  handleClick = (e) => {
    e.preventDefault();
    let ip = e.target.elements.todoData.value;
    if (ip !== "") {
      this.props.dispatch(addTodo(ip));
      e.target.elements.todoData.value = "";
    }
  }


  handleDelete = (item) => {
    this.props.dispatch(deleteTodo(item))
  }


  render() {

    let totalTodo = this.props;
    return (
      <Fragment>
        <div className="container">
          <h3 className="bg-secondary text-light text-center p-2">TODO LIST</h3>
          <ul className="todolist">
            {
              totalTodo.data.todoList.length >= 1 ? (
                totalTodo.data.todoList.map((item, index) => (
                  <TodoList
                    key={index}
                    item={item}
                    handleDelete={this.handleDelete}
                    editTodo={this.editTodo} />
                ))
              ) : (<div className="no-todos">
                <p>Please Enter some todos in todolist</p>
              </div>)
            }
          </ul>
          <Addtodo
            handleClick={this.handleClick}
          />
        </div>
      </Fragment>
    )
  }
}

export default Main;