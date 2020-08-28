import React, { Component } from 'react'


export default class AddTodo extends React.Component {
    state = {
        text: ''
    }

    handleChange = (event) => {
        let text = event.target.value
        this.setState({ text })
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        if (this.state.text !== '') {
            this.props.addTodo(this.state.text)
        }
        this.setState({ text: '' })
    }

    render() {
        return (
            <form className="form-group" onSubmit={this.onSubmitForm}>
                <label>
                    <input className="form-control" onChange={this.handleChange} value={this.state.text} />
                </label>
                <input type='submit' className="button btn btn-danger m-2" value="Add" />
            </form>
        )
    }
}