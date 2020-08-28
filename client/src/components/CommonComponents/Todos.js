import React, { Component } from 'react'
import AddTodo from './AddTodo'
import BlockText from './BlockText'
import Heading from './Heading'
import ExerciseForm from '../SpecificComponents/ExerciseForm'
import FoodWaterForm from '../SpecificComponents/FoodWaterForm'

export default class Todos extends React.Component {



    form = () => {
        if (this.props.flag === 'exercise') {
            return <ExerciseForm addTodo={this.props.addTodo} />
        }
        else if (this.props.flag === 'student') {
            return <AddTodo addTodo={this.props.addTodo} />
        }
        else if (this.props.flag === 'foodWater') {
            return <FoodWaterForm addTodo={this.props.addTodo} />
        }
    }


    render() {
        return (
            <React.Fragment>

                {this.form()}

                {this.props.renderTodoItem()}

            </React.Fragment>
        )
    }
}