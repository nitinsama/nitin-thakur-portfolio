import React, { Component } from 'react'

export default class todoItem extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between my-2">
                <h6 className="">{this.props.title}</h6>
                <div className="todoIcon">
                    <span className="mx-2 text-success">
                        <i className="fas fa-pen" onClick={this.props.handleEdit}></i>
                    </span>
                    <span className="mx-2 text-danger" onClick={this.props.clearTask}>
                        <i className="fas fa-trash">
                        </i>
                    </span>
                </div>
            </li>
        )
    }
}
