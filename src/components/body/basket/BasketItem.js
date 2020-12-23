import {Component} from 'react';

class BasketItem extends Component {
    getCost = () => Math.floor(this.props.item.amount * this.props.product.price);
    render() {
        return(
            <li>{this.props.product.name} - {this.props.item.amount} кг/шт - {this.getCost()} руб</li>
        );
    }
};

export default BasketItem