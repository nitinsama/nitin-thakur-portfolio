import React, { Component } from 'react'
export default class recipeDetails extends Component {
    
        
    render() {
        
        const recipe=this.props.recipe[this.props.id-1]
        return (
            
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button type="button" 
                            className="btn btn-warning mb-5"
                            onClick={()=>this.props.handleIndex(1)}>
                                Back to Recipe List
                            </button>
                            <img src={recipe.img} 
                            alt="recipe" 
                            className="d-block w-100" ></img>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6>
                                {recipe.title}
                            </h6>
                            <h6 className="text-warning textMerry">
                                Provided By: {recipe.publisher}
                            </h6>
                            <a href="https://www.linkedin.com/in/ni3sama/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary mt-2">
                                Publisher Webpage
                            </a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">
                                    Ingridients:
                                </h2>
                                {
                                    recipe.ingredients.map((item, index)=>{
                                        return(
                                            <li key={index} className="list-group-item textMerry">
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
