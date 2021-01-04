import React from 'react';
import BasketItem from './BasketItem';
import products from '../../../mock';
import './../../../index.css'


function Basket (props) {
    const getProductInfo =(id) => {
        return products.find(product => product.id === id)
    };
    const basket =props.basket || [];
        return(
            <div className='basketDiv'>
                <h1 className='header'>Корзина</h1>
                <ul> 
                    {basket.map(item => (<BasketItem 
                        key={item.id} 
                        item={item} 
                        product={getProductInfo(item.id)}/>)
                    )}
                </ul>
                <button className = 'actionContainer' onClick={() => props.clearBasket()}>Удалить</button>
            </div>
        );
    };
    
export default Basket