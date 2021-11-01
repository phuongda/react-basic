import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        ListTodos: [
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
        ]
    }

    addNewTodo = (todo) => {
        this.setState({
            ListTodos: [...this.state.ListTodos, todo]
        })

        toast.success("Add todo list success!");
    }

    render() {
        let { ListTodos } = this.state;

        return (
            <div className="list-todo-container">
                <AddTodo addNewTodo={this.addNewTodo} />
                <div className="list-todo-content">
                    {
                        ListTodos && ListTodos.length > 0 &&
                        ListTodos.map((item, index) => {
                            return (
                                <div key={item.id} className="todo-child">
                                    <span>{index + 1}. {item.title}</span>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo;