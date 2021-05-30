import React from "react"

class ProductList extends React.Component{
    render(){
        
        return(
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3 ">
                    <div className="card clothContainer">
                        <img src={this.props.data.image}
                        className="img-card-top clothImage"
                        alt="recipe"></img>
                        <div className="card-body text-center">
                            <h6 className="titleText">{this.props.data.title}</h6>
                            <h6 className="textMerry text-center">
                                <strong>Description:</strong> {this.props.data.description}
                            </h6>
                            <h6 className="titleText">{this.props.data.disabledClick ? "" : "Quantity Left:"} {this.props.data.quantity}</h6> 
                            <button 
                                disabled={this.props.data.disabledClick} 
                                className="btn btn-success" 
                                onClick={()=>this.props.handleAddToCart(this.props.data.id)}>
                                Add to Cart{" "}<i class="fas fa-cart-plus"></i>
                            </button> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default ProductList

