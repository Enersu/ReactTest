import {Component} from 'react';
import BasketItem from './BasketItem';
import products from '../../../mock';


class Basket extends Component {
    getProductInfo=(id) => {
        return products.find(product => product.id === id)
    };

    render() {
        return(
            <div>
                <h1 className='header'>Корзина</h1>
                {this.props.basket && this.props.basket.lengh > 0 &&
                    <ul> 
                        {this.props.basket.map(item => (<BasketItem 
                                                        key={item.id} 
                                                        item={item} 
                                                        product={this.getProductInfo(item.id)}/>)
                        )}
                    </ul>
                }
                <button className = 'actionContainer' onClick={() => this.props.clearBasket()}>Удалить</button>
            </div>
        );
    }
};

export default Basket