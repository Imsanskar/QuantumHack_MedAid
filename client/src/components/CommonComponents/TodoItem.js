import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import BlockText from './BlockText'
import DeleteItem from '../Assets/SVG/remove_circle-24px.svg'

export default class TodoItem extends React.Component {
    renderComponent = () => {
        if (this.props.flag === 'exercise') {
            return (
                <div>
                    Activity: { this.props.todoItem}<br />
					Duration: {this.props.duration}<br />
					Note:<br />{this.props.note}
                    <img className="waterButton" src={DeleteItem} style={imgStyle} onClick={() => this.props.onDelete(this.props.id)} />
                </div>
            )
        }
        else if (this.props.flag === 'student') {
            return (
                <div>
                    {this.props.title}<br />
                    {this.props.todoItem}
                    <img className="waterButton" src={DeleteItem} style={imgStyle} onClick={() => this.props.onDelete(this.props.id)} />
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                <div className="container shadow" style={panelStyle}>
                    <div style={panelStyle} className="text-left">
                        {this.renderComponent()}
                    </div>
                </ div>
            </div>
        )
    }
}



const panelStyle = {
    width: '50%',
    position: 'relative',
    borderRadius: "20px",
    padding: "5px",
    margin: "10px auto",
    fontFamily: "Raleway-Medium",
    fontSize: "18px",
    backgroundColor: "#cc0000",
    color: "white",
}


const imgStyle = {
    position: 'absolute',
    top: '0px',
    right: '0px',
    display: "block",
    height: "30px",
    width: "30px",
    cursor: "pointer",
}