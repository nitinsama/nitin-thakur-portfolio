import React, { Component } from 'react'
import TodoItem from './todoItem'
export default class todoList extends Component {
    render() {
        return (
            <ul className="list-group my-5">
                <h3 className="text-center">Todo List</h3>
                {
                    this.props.items.map(item=>{
                        return(
                            <TodoItem 
                            key={item.id} 
                            title={item.title} 
                            clearTask={()=>this.props.clearTask(item.id)}
                            handleEdit={()=>this.props.handleEdit(item.id)}
                            />
                        )
                    })
                }

                <button onClick={this.props.clearList} type="button" className="btn btn-danger btn-block">
                    Clear List
                </button>
            </ul>
        )
    }
}
