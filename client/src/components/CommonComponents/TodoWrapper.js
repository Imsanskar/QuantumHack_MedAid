import React from 'react'
import Todos from './Todos'
import TodoItem from './TodoItem'


export default class extends React.Component {
    state = {
        counter: 0,
        todos: [

        ]
    }


    handleDelete = todoId => {
        const todos = this.state.todos.filter(c => c.id !== todoId)
        let counter = this.state.counter - 1
        this.setState({ counter, todos })
    }

    renderTodoItem = () => {
        return this.state.todos.map(option => (
            <TodoItem
                duration={option.duration}
                title={this.props.title}
                todoItem={option.title}
                key={option.id}
                onDelete={this.handleDelete}
                id={option.id}
                flag={this.props.flag}
                note={option.note}
            />
        ))
    }

    addTodo = (title, duration = '', note = '') => {
        let counter = this.state.counter + 1;
        const newTodo = {
            id: counter,
            title,
            duration,
            note
        }
        this.setState({ counter: counter, todos: [...this.state.todos, newTodo] })
    }


    render() {
        return (
            <div>
                <Todos flag={this.props.flag} form={this.props.form} todos={this.state} addTodo={this.addTodo} renderTodoItem={this.renderTodoItem} handleDelete={this.handleDelete} />
            </div>
        )
    }
}