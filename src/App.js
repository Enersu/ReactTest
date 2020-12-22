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

    if(productFromCart) {
      const newBasket = this.state.basket.map((existed) => {
        if(existed.id !== id) {
          return existed
        }
        return {
          ...existed,
          amount: existed.amount + 1
        }
      });
      this.setState({basket: newBasket});
    }else{
      const newProduct = {id, amount: 1};
      this.setState((state) => ({basket: [...state.basket, newProduct]})); 
    }
  };

  clearBasket = () => this.setState(()=>({basket: []}));
    
  render() {
  return (
      <div>
        <div>
          <Header className="App"/>
          <Table addProduct={this.addProductToCart}/>  
          <Basket basket={this.state.basket} clearBasket={this.clearBasket}/>
        </div>
      </div>
    );
  }
}
export default App;
