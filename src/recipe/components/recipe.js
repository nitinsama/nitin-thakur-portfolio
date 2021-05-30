import React, { Component } from 'react'

export default class recipe extends Component {
    render() {
        return (
            <React.Fragment>
                
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3 ">
                    <div className="card recipeContainer">
                        <img src={this.props.recipe.img}
                        className="img-card-top recipeImage"
                        style={{height:"14rem"}}
                        alt="recipe"></img>
                        <div className="card-body">
                            <h6 className="titleText">{this.props.recipe.title}</h6>
                            <h6 className="text-warning textMerry text-center">
                                Provided By: {this.props.recipe.publisher}
                            </h6>
                        </div>
                        <button 
                        type="button"
                        className="btn btn-primary mx-5 mb-3"
                        onClick={()=>this.props.handleDetails(0, this.props.id)}>Details
                        </button>
                        
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}
