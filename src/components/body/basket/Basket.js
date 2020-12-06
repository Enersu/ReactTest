import {Component} from 'react';
// import BasketList from './productList/BasketList';

class Basket extends Component {
    render() {
        return(
            <div style={{
                position: 'absolute',
                marginLeft: 900}}>
               <h1 className='header'>Корзина</h1>
               <ul><li>Капец</li></ul>
               <button className = 'actionContainer'>Удалить</button>
            </div>
        );
    }
};

export default Basket