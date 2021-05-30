import React, { Component } from 'react'
import Recipe from "./recipe"
import RecipeSearch from "./recipeSearch"

export default class recipeList extends Component {
    render() {
        return (
            <React.Fragment>
                <RecipeSearch 
                value={this.props.value}
                handleChange={this.props.handleChange}
                handleSubmit={this.props.handleSubmit}
                />
                <div class="container my-5">
                    {/*title*/ }
                    <div className="row">  
                        <div className="col-10 mx-auto col-md-6 text-center mb-3">
                            <h1 className="textMerry">Recipe List</h1>
                        </div>     
                    </div>
                    {/*title end*/ }
                    <div className="row">
                        {this.props.error ? 
                            <h1 className="text-danger text-center">{this.props.error}</h1>
                        :
                        this.props.recipes.map(recipe=>{
                            return(
                                <Recipe 
                                    id= {recipe.id}
                                    recipe= {recipe}
                                    handleDetails= {this.props.handleDetails}
                                />
                            )
                        })
                            }
                    </div>   
                </div>
                
            </React.Fragment>
        )
    }
}
