import React, { Component } from 'react'


export default class todoInput extends Component {
    render() {
        return (
            <div className="card card-body my-3">
                <form onSubmit={this.props.handleSubmit}>
                    <div className="input-group">
                        <div class="input-group-prepend">     
                            <div class="input-group-text bg-primary text-white">
                                <i className="fas fa-book p-1 "></i>
                            </div> 
                        </div>
                        <input 
                        type="text" 
                        className="form-control text-capitalize" 
                        placeholder="add a todo item"
                        value= {this.props.item}
                        onChange= {this.props.handleChange}
                        />
                    </div>
                    <button 
                        className= {this.props.editItem? "btn btn-block btn-success col-12 mt-3" :"btn btn-block btn-primary col-12 mt-3"} 
                        type="submit">
                        {this.props.editItem? "Edit Item" : "Add Item"}
                    </button>     
                </form>
            </div>
        )
    }
}
