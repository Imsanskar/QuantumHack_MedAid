import React, { Component } from 'react'


export default class ExerciseForm extends React.Component{
	state = {
		text:'',
		duration:'',
		note:''
	}

	handleChange = (event)=>{
		let text = event.target.value
		this.setState({ text })
	}
	
	onSubmitForm = (event) => {
		event.preventDefault();
		if(this.state.text !== ''){
			this.props.addTodo(this.state.text, this.state.duration, this.state.note)
		}
		this.setState({text:'', duration:'', note:''})
	}

	handleDuration = (event)=>{
		let duration = event.target.value
		this.setState({duration})
	}
	
	handleNote = (event)=>{
		let note = event.target.value
		this.setState({ note  })
	}

	render(){
		return(
			<form className="form-group" onSubmit={ this.onSubmitForm }>
				<label>
					<input className="form-contro m-2" onChange={ this.handleChange } value={ this.state.text } placeholder='Exercise'/>
					<input className="form-control " onChange={ this.handleDuration } value = {this.state.duration} placeholder='Duration'/>
					<input className="form-control m-2" onChange={ this.handleNote } value = {this.state.note} placeholder='Note'/>
				</label><br />
				<input type='submit' className="button btn btn-danger m-2" value="Add"/>
			</form>
		)
	}
}