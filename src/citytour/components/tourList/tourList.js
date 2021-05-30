import React from 'react'
import './tourList.css'
import Tour from '../tour/tour'
import TourData from './tourData'

class TourList extends React.Component{
    constructor(){
        super()
        this.state ={
            tours: TourData 
        }
    }
    removeTour = id => {
        const filteredTours = this.state.tours.filter(tour=>
            tour.id !== id
            )
        this.setState({
            tours: filteredTours
        })  
    }
    render(){
        const displayTour = this.state.tours.map((item)=>
            <Tour key={item.id} data={item} removeTours={this.removeTour}/>
        )
        return(
            <div className="tourList">
                {displayTour}
            </div>
        )
    }
}

export default TourList