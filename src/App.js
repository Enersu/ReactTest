import { Component } from 'react';
import './index.css';
import Header from './components/header/Header';
import Table from './components/body/table/Table';
import Basket from './components/body/basket/Basket';


class App extends Component {
  state = {
    basket: [],
  }
  addProductToCart=(id)=>{
    const productFromCart = this.state.basket.find(item => item.id === id);

    if (productFromCart) {
      productFromCart.amount += 1;
      this.setState((state) => ({basket: [...state.basket]})); 
    }else{
      const newProduct = {id, amount: 1};
      this.setState((state) => ({basket: [...state.basket, newProduct]})); 
      console.log(this.state.basket)
    }
  };

  clearBasket = () => this.setState(()=>({basket: []}));
    
  render() {
  return (
      <div>
        <div>
          <Header className="App"/>
          <Table addProduct={this.addProductToCart.bind(this)}/>  
          <Basket basket={this.state.basket} clearBasket={this.clearBasket.bind(this)}/>
        </div>
      </div>
    );
  }
}
export default App;
