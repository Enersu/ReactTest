import {Component} from 'react';
import products from '../../../mock.js'
import Product from './product/Product'


class Table extends Component {
  render() {
    return (
        <div>
          {products.map((product, index) => {
            return <Product key = {index}{...product}/>;
          })}
        </div>
      );
    }
  }
export default Table;