import React from 'react';


function BasketItem (props) {
    const getCost = () => Math.floor(props.item.amount * props.product.price); 
        return(
            <li>{props.product.name} - {props.item.amount} кг/шт - {getCost()} руб</li>
        );
    };
    
export default BasketItem