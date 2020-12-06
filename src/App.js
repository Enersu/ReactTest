import { Component } from 'react';
import classes from'./App.module.css';
import Header from './components/header/Header';
import Table from './components/body/table/Table';
import Basket from './components/body/basket/Basket';


class App extends Component {
  render() {
  return (
      <div>
        <div className={classes.App}>
          <Header/>
        </div>
        <div style={{
          marginLeft: 50,
          marginRight: 700,
          marginTop: 10
          }}>
          <Table/>
        </div>
        <div>
          <Basket/>
        </div>
      </div>
    );
  }
}
export default App;
