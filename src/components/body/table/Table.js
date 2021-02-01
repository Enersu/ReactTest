import React, {useState, useEffect} from 'react';
import Basket from '../basket/Basket';
import Product from './product/Product'



function Table(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [products, setProducts] = useState([])

  useEffect(() => {
    const requestURL = 'https://api.mocki.io/v1/2fb9c89c';
    fetch(requestURL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setProducts(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  },[])

  console.log(products)

  if (error) {
    return <div>Ошибка: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Загрузка...</div>;
  } else {
    return(
      <div>
        <div> 
          {products.map((product) => {
            return <Product key = {product}{...product} addProduct={props.addProduct}/>;
          })}
        </div>
      </div>
    )
  } 
}
  export default Table;