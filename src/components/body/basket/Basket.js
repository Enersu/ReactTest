import {Component} from 'react';

class Basket extends Component {
    render() {
        return(
            <div style={{
                position: 'absolute',
                marginLeft: 900}}>
               <h1 className='header'>Корзина</h1>
            <ul><li>{this.props.Basket}</li></ul>
               <button className = 'actionContainer'>Удалить</button>
            </div>
        );
    }
};

export default Basket