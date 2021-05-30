import React from "react"
import ProductList from "./productList"
import Products from "./products"
import "./MyApp.css"

class MyApp extends React.Component{

    constructor()
    {
        super()
        this.state={
            productstate: Products
        }

        this.handleAddToCart=this.handleAddToCart.bind(this);
    }

    handleAddToCart(id){
       this.setState(prevState => {
           const updateQuantity = prevState.productstate.map(quant=> {
               if(quant.id === id){
                   if(quant.quantity>0)
                   {
                    quant.quantity = quant.quantity - 1
                   }
                   if(quant.quantity===0)
                   {
                       quant.quantity = "Out of stock"
                       quant.disabledClick = true
                   }
               }
               return quant
           })
           return {
               productstate: updateQuantity
           }
       })
    }

    render()
    {
        /* const products = this.state.productstate.sort((a, b) => (
            b.quantity - a.quantity
            )); */
        
        return(
            <React.Fragment>
                <h1 className="textMerry text-center mt-4 shopping">Shopping</h1>
                <div className="allProducts">
                    <div className="row rowContainer">
                        {this.state.productstate.map((item) => 
                            <ProductList 
                                key={item.id} 
                                data={item}
                                handleAddToCart = {this.handleAddToCart}
                            /> )}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default MyApp