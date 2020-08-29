import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import DeleteItem from '../Assets/SVG/remove_circle-24px.svg'

export default class TodoItem extends React.Component {
    noteRender = (note) => {
        if (note !== '') {
            return (
                <div>
                    Note:<br />
                    {note}
                </div>
            )
        }

    }

    renderComponent = () => {
        if (this.props.flag === 'exercise') {
            return (
                <div>
                    Activity: { this.props.todoItem}<br />
					Duration: {this.props.duration}<br />
					Note:<br />{this.props.note}
                </div>
            )
        }
        else if (this.props.flag === 'student') {
            return (
                <div>
                    {this.props.title}<br />
                    {this.props.todoItem}
                </div>
            )
        }
        else if (this.props.flag === 'foodWater') {
            console.log(this.props.time)
            return (
                <div>
                    Food: { this.props.food}<br />
					Time: { this.props.time}<br />
					Calories: { this.props.calories}<br />
                    {this.noteRender(this.props.note)}
                </div>
            )
        }
    }


    render() {
        return (
            <div>
                <div className="container shadow" style={panelStyle}>
                    <div className="row align-items-center">
                        <div className="col-10 text-left" style={textStyle}>{this.renderComponent()}</div>
                        <div className="col-2">
                            <img className="waterButton" src={DeleteItem} style={imgStyle} onClick={() => this.props.onDelete(this.props.id)}
                                alt="delete" />
                        </div>
                    </div>
                </ div>
            </div>
        )
    }
}


const panelStyle = {
    borderRadius: "20px",
    padding: "15px",
    margin: "10px auto",
    backgroundColor: "#cc0000",
}


const imgStyle = {
    display: "block",
    height: "30px",
    width: "30px",
    cursor: "pointer",
    margin: "auto auto"
}

const textStyle = {
    fontFamily: "Raleway-Medium",
    fontSize: "18px",
    color: "white",
}