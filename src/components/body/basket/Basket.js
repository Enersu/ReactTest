import {Component} from 'react';
import BasketItem from './BasketItem';
import products from '../../../mock';
import './../../../index.css'


class Basket extends Component {
    getProductInfo=(id) => {
        return products.find(product => product.id === id)
    };
    render() {
        const basket =this.props.basket || [];

        return(
            <div className='basketDiv'>
                <h1 className='header'>Корзина</h1>
                <ul> 
                    {basket.map(item => (<BasketItem 
                        key={item.id} 
                        item={item} 
                        product={this.getProductInfo(item.id)}/>)
                    )}
                </ul>
                <button className = 'actionContainer' onClick={() => this.props.clearBasket()}>Удалить</button>
            </div>
        );
    }
};

export default Basket