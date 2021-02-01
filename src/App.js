import React, {useState} from 'react';
import './index.css';
import Header from './components/header/Header';
import Table from './components/body/table/Table';
import Basket from './components/body/basket/Basket';


function App () {
  const [count, setCount] = useState({basket: []})

  const addProductToCart=(id)=>{
  const productFromCart = count.basket.find(item => item.id === id);

    if(productFromCart) {
      const newBasket = count.basket.map((existed) => {
        if(existed.id !== id) {
          return existed
        } 
          return {
          ...existed,
          amount: existed.amount + 1
        }
      });
      setCount({basket: newBasket});
    }else{
      const newProduct = {id, amount: 1};
      setCount((count) => ({basket: [...count.basket, newProduct]})); 
    }
  };

  const clearBasket = () => setCount(()=>({basket: []}));
  
  return (
    <div>
      <div className="app">
        <Header/>
      </div>
      <div className="content-wrapper" >
        <Table addProduct = {addProductToCart}/> 
      <div className="positionBasket">
        <Basket basket={count.basket} clearBasket={clearBasket} />
      </div>
      </div>
    </div>
  );
}

export default App;
