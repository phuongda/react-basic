import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodos: [
            {
                id: 'todo1',
                title: 'doing homework'
            },
            {
                id: 'todo2',
                title: 'making video'
            },
            {
                id: 'todo3',
                title: 'fixing bugs'
            }
        ],
        editTodo: {

        }
    }

    handleAddNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Add todo success!");
    }

    handleDeleteTodo = (todo) => {
        let currentTodo = this.state.listTodos;
        currentTodo = currentTodo.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodo
        })
        toast.success("Delete todo success!");
    }

    handleChangeTitle = (event) => {
        let currentTodo = { ...this.state.editTodo }
        currentTodo.title = event.target.value;
        this.setState({
            editTodo: currentTodo
        })
    }

    handleEditTodo = (todo) => {
        let { listTodos, editTodo } = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;

        if (!isEmptyObject && editTodo.id === todo.id) {
            let currentTodo = [...listTodos];
            let indexTodo = currentTodo.findIndex(item => item.id === todo.id);
            currentTodo[indexTodo].title = editTodo.title;
            this.setState({
                listTodos: currentTodo,
                editTodo: ''
            })
            toast.success("Update todo success!");
            return;
        }

        this.setState({
            editTodo: todo
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObject = Object.keys(editTodo).length === 0;

        return (
            <>
                <p>
                    Simple Todo App With Me
                </p>
                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.handleAddNewTodo} />
                    <div className="list-todo-content">
                        {
                            listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div key={item.id} className="todo-child">
                                        {isEmptyObject ?
                                            <span>{index + 1}. {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1}. <input value={editTodo.title} onChange={(event) => this.handleChangeTitle(event)} />
                                                    </span>
                                                    :
                                                    <span>{index + 1}. {item.title}</span>
                                                }
                                            </>
                                        }
                                        <button onClick={() => this.handleEditTodo(item)}>
                                            {!isEmptyObject && editTodo.id === item.id ? 'Save' : 'Edit'}
                                        </button>
                                        <button onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;