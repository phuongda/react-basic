import React from "react";
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: '',
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddNewTodo = () => {
        if (!this.state.title) {
            toast.error("Missing title!");
            return;
        }

        this.props.addNewTodo({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title
        });

        this.setState({
            title: ''
        })
    }

    render() {
        let { title } = this.state;
        return (
            <div className="add-todo">
                <input type="text" value={title} onChange={(event) => this.handleChangeTitle(event)} />
                <button type="button" className="btn-add" onClick={() => this.handleAddNewTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;