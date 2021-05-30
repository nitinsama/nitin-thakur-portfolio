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
                                backgroundSize: "100%",
                                opacity: "50%"
                                }} >
                                Buy Cloths</button></Link>
                        <Link to="/cityTour"><button class="btn button2"
                        style={{ backgroundImage: "url(/images/tour.jpg)" ,
                        backgroundSize: "100%",
                        opacity: "50%"
                        }}>City Tour</button></Link>
                    </div>
                    <div className="col projectCol">
                        <Link to="/todoList"><button class="btn button3"
                        style={{ backgroundImage: "url(/images/todo.jpg)" ,
                        backgroundSize: "100%",
                        opacity: "50%"
                        }}
                        >To-Do List</button></Link>
                        <Link to="/recipeFinder">
                        <button class="btn button4" style={{ backgroundImage: "url(/images/recipe.jpg)" ,
                                backgroundSize: "100%",
                                opacity: "50%"
                                }}>Recipe Finder</button></Link>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default LinkPages