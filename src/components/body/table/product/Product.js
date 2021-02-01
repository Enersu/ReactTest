import React from 'react'
import '../../../../index.css'


function Product(props) {
    return(
        <div className="productContainer">
            <div className="banner">{props.name}</div>
            <div><img className="image" src={props.image} alt=''></img></div>
            <div className="description">Описание</div>
            <div className="text">{props.text}</div>
            <span className="price">{props.price}</span>
            <span className="value">{props.value}</span>
            <button className="button" onClick={()=>props.addProduct(props.id)}>В корзину</button>
        </div>
    )
};

export default Product;