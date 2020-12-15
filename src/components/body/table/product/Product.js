import React from 'react'
import '../../../../index.css'

class Product extends React.Component {
    render() {
        return(
            <div className="productContainer">
                <div className="banner">{this.props.name}</div>
                <div>{this.props.image}</div>
                <div className="description">Описание</div>
                <div className="text">{this.props.text}</div>
                <span className="price">{this.props.price}</span>
                <span className="value">{this.props.value}</span>
                <button className="button" onClick={()=>this.props.addProduct(this.props.id)}>В корзину</button>
            </div>
        )
    }
};

export default Product;