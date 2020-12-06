import React from 'react'
import  classes from './Product.module.css'

const Product = props => {
    return(
        <div className={classes['product-container']}>
            <div className={classes.banner}>{props.name}</div>
            <div>{props.image}</div>
            <div className={classes.description}>Описание</div>
            <div className={classes.text}>{props.text}</div>
            <span className={classes.price}>{props.price}</span>
            <span className={classes.value}>{props.value}</span>
            <button className={classes.button}>В корзину</button>
        </div>
    );
};

export default Product;