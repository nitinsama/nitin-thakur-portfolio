import React, { Component } from 'react'

export default class recipeSearch extends Component {
    render() {
        return (
            <React.Fragment>
               <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5  text-center">
                            <h1 className="textMerry">
                                Search Recipe with{" "}
                                <strong className="text-danger">
                                    Ingridients
                                </strong>
                            </h1>
                            <form className="mt-4" onSubmit={this.props.handleSubmit}> 
                                <label htmlFor="search">
                                    Type single  Ingredient
                                </label>
                                <div className="input-group">
                                    <input 
                                    type="text" 
                                    name="search"
                                    placeholder="chicken, potato, onion"
                                    className="form-control"
                                    value={this.props.value}
                                    onChange={this.props.handleChange}
                                    />
                                    <div className="input-group-append">
                                        <buttun type="submit"
                                        className="input-group-text bg-primary text-white">
                                        <i className="fas fa-search p-1 " onClick={this.props.handleSubmit}></i>
                                        </buttun>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
               </div>
            </React.Fragment>
        )
    }
}
