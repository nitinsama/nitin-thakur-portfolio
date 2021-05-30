import React from 'react'
import './tour.css'


class Tour extends React.Component{
    constructor(){
        super()
        this.state ={
            showInfo : false,
            showIconDown : true,
            showIconUp: false
        }
    }
    showParagraph = () =>{
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
    showIcon = () =>{
        this.setState({
            showIconDown: !this.state.showIconDown,
            showIconUp: !this.state.showIconUp
    
        })
    }
    render(){
        return(
            <article className="tour">
                <div className="imageContainer">
                    <img src={this.props.data.img} alt=""></img>
                    <span className="closeBtn">
                        <i onClick={()=> {this.props.removeTours(this.props.data.id)}} className="fas fa-window-close">
                        </i>
                    </span>
                </div>
                <div className="tourInfo">
                    <h3>City: {this.props.data.city}</h3>
                    <h4>Name: {this.props.data.name}</h4>
                    <h5>Info <span className="toggleArrow">
                                <i onClick={this.showIcon}>
                                <i style={{visibility: this.state.showIconDown? "visible": "hidden"}}onClick={this.showParagraph} class="fas fa-arrow-alt-circle-down"></i>
                                <i className="upArrow" style={{visibility: this.state.showIconUp? "visible": "hidden"}}onClick={this.showParagraph} class="fas fa-arrow-alt-circle-up"></i>
                                </i>
                            </span></h5>
                    <p>{this.state.showInfo && this.props.data.info}</p>
                </div>
            </article>
        )
    }
}

export default Tour