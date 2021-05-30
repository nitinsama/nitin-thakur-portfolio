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
                        <Link to="/shopping"><button class="btn button1"><h2>Buy Cloths</h2></button></Link>
                        <Link to="/cityTour"><button class="btn button2"><h2>City Tour</h2></button></Link>
                    </div>
                    <div className="col projectCol">
                        <Link to="/todoList"><button class="btn button3"><h2>To-Do List</h2></button></Link>
                        <Link to="/recipeFinder"><button class="btn button4"><h2>Recipe Finder</h2></button></Link>
                    </div>
                </div>
            </div>
            </React.Fragment>
        )
    }
}

export default LinkPages