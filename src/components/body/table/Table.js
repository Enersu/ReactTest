import React from 'react';
import products from '../../../mock.js'
import Product from './product/Product'


function Table(props) {
  return (
      <div>
        {products.map((product, index) => {
          return <Product key = {index}{...product} addProduct={props.addProduct}/>;
        })}
      </div>
    );
  }

  export default Table;