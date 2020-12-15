import { Component } from 'react';
import './index.css';
import Header from './components/header/Header';
import Table from './components/body/table/Table';
import Basket from './components/body/basket/Basket';


class App extends Component {
  state = {
    basket: new Map(),
  }
  addProductToCart=(id)=>{
    const productFromCart = this.state.basket.get(id);
    this.setState(() => this.state.basket.set(id, {amount: productFromCart ? productFromCart.amount + 1 : 1}))
  }
  render() {
  return (
      <div>
        <div>
          <Header className="App"/>
        </div>
        <div style={{
          marginLeft: 50,
          marginRight: 700,
          marginTop: 10
          }}>
          <Table addProduct={this.addProductToCart.bind(this)}/>
        </div>
        <div>
          <Basket basket={this.state.basket}/>
        </div>
      </div>
    );
  }
}
export default App;
