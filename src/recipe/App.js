import './App.css';
import {recipes} from "./recipeDetails"
import RecipeList from "./components/recipeList"
import RecipeDetails from "./components/recipeDetails"

import React, { Component } from 'react'

export default class App extends Component {
  state= {
    recipes : recipes,
    detailsId: 9,
    pageIndex: 1,
    search: ' ',
    error: ''
  }

  displayPage = (index) => {
    switch(index){
      default:
        case 1: 
          return(<RecipeList 
            recipes={this.state.recipes} 
            handleDetails={this.handleDetails}
            value={this.state.search}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            error={this.state.error}
          />)
        case 0:
          return(<RecipeDetails 
            id={this.state.detailsId}
            recipe={this.state.recipes}
            handleIndex={this.handleIndex}
            />)
    }
  }

  handleIndex = index => {
    this.setState({
      pageIndex: index
    })
  }

  handleDetails = (index,id) => {
    this.setState({
      pageIndex: index,
      detailsId: id
    })
  }

  handleChange = (e) => {
     this.setState({
       search: e.target.value
     })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const str= this.state.search
    const ingred0 = str.replace(/ /g, '')
    const ingred= ingred0.toLowerCase();

    const filteredRecipes = this.state.recipes.filter(recipe=>
      recipe.ingredient === ingred) 
      if(filteredRecipes.length === 0)
      {
        this.setState(()=>{
          return {error: 'Sorry, couldn\'t find the recipe.'}
        })
      }
      else{
        this.setState({
          recipes: filteredRecipes
      })
      }
      
  }

  render() {
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>     
    )
  }
}
