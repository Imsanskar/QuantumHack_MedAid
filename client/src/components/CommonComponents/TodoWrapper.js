import React from 'react'
import Todos from './Todos'
import TodoItem from './TodoItem'
import Heading from './Heading'

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
                food={option.food}
                time={option.time}
                calories={option.calorie}
            />
        ))
    }

    addTodo = (parameter) => {
        let counter = this.state.counter + 1;
        if(parameter['duration'] != undefined){
            console.log(parseInt(parameter['duration']))
            this.props.addMinutes(parseInt(parameter['duration']))
        }
        const newTodo = {
            id: counter,
            title: parameter['title'],
            duration: parameter['duration'],
            note: parameter['note'],
            food: parameter['food'],
            time: parameter['time'],
            calorie: parameter['calorie']
        }
        this.setState({ counter: counter, todos: [...this.state.todos, newTodo] })
    }


    render() {
        return (
            <div>
                <Heading headingTitle={this.props.headingTitle} />
                <Todos flag={this.props.flag} form={this.props.form} todos={this.state} addTodo={this.addTodo} renderTodoItem={this.renderTodoItem} handleDelete={this.handleDelete}/>
            </div>
        )
    }
}