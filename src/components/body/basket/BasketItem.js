import {Component} from 'react';

class BasketItem extends Component {
    getCost = () => this.props.item.amount * this.props.product.price;
    render() {
        return(
            <li>{this.props.product.name} - {this.props.item.amount} - {this.getCost()}</li>
        );
    }
};

export default BasketItem