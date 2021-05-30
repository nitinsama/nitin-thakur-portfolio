import React from "react"
import { Link } from "react-router-dom";
import "./linkPages.css"


class LinkPages extends React.Component{
    render(){
        return(
            <React.Fragment>
                
                <div className="container-fluid projectContainer">
                <div className="row projectRow">
                    <div className="col projectCol">
                        <Link to="/shopping"><button class="btn button1" 
                        style={{ backgroundImage: "url(/images/cloths.jpeg)" ,
                                backgroundSize: "100%"
                                
                                }} >
                                <h1>Buy Cloth</h1></button></Link>
                        <Link to="/cityTour"><button class="btn button2"
                        style={{ backgroundImage: "url(/images/tour.jpg)" ,
                        backgroundSize: "100%"
                        
                        }}><h1>City Tour</h1></button></Link>
                    </div>
                    <div className="col projectCol">
                        <Link to="/todoList"><button class="btn button3"
                        style={{ backgroundImage: "url(/images/todo.jpg)" ,
                        backgroundSize: "100%"
                       
                        }}
                        ><h1>To-Do List</h1></button></Link>
                        <Link to="/recipeFinder">
                        <button class="btn button4" style={{ backgroundImage: "url(/images/recipe.jpg)" ,
                                backgroundSize: "100%"
                                }}><h1>Recipe Finder</h1></button></Link>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default LinkPages