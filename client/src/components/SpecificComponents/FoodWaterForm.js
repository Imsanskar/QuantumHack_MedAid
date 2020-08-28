import React from 'react'


export default class FoodWaterForm extends React.Component {
    state = {
        text: '',
        time: '',
        note: '',
        calorie: ''
    }

    handleChange = (event) => {
        let text = event.target.value
        this.setState({ text })
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        if (this.state.text !== '') {
            this.props.addTodo({ food: this.state.text, time: this.state.time, note: this.state.note, calorie: this.state.calorie })
        }
        this.setState({ text: '', time: '', note: '', calorie: '' })
    }


    handleCalorie = (event) => {
        event.preventDefault()
        this.setState({ calorie: event.target.value })
    }


    handleTime = (event) => {
        let time = event.target.value
        this.setState({ time })
    }

    handleNote = (event) => {
        let note = event.target.value
        this.setState({ note })
    }

    render() {
        return (
            <form className="form-group" onSubmit={this.onSubmitForm}>
                <label>
                    <input className="form-contro m-2" onChange={this.handleChange} value={this.state.text} placeholder='Food' />
                    <input className="form-control m-2" onChange={this.handleTime} value={this.state.time} placeholder='Time' />
                    <input className="form-control m-2" onChange={this.handleCalorie} value={this.state.calorie} placeholder='Calories' />
                    <input className="form-control m-2" onChange={this.handleNote} value={this.state.note} placeholder='Note' />
                </label><br />
                <input type='submit' className="button btn btn-danger m-2" value="Add" />
            </form>
        )
    }
}