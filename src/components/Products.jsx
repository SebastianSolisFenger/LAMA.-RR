// import axios from 'axios';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
// import axios from 'axios';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = React.useState([]);
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       const res = await axios.get(
  //         cat
  //           ? `http://localhost:5000/api/products?category=${cat}`
  //           : 'http://localhost:5000/api/products'
  //       );
  //       // console.log(res);
  //       setProducts(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProducts();
  // }, [cat]);

  // useEffect(() => {
  //   const getProducts = async () => {
  //     try {
  //       // const res = cat
  //       //   ? `http://localhost:3000/products?category=${cat}`
  //       //   : 'http://localhost:3000/';

  //       // console.log(popularProducts);
  //       const res = popularProducts;
  //       setProducts(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getProducts();
  // }, [cat]);

  // console.log(popularProducts);

  // setProducts(popularProducts);
  // console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setProducts(popularProducts);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  console.log(products);

  // //each time the category => cat/ changes run the function *(get products from our api)

  // Second UseEffect to filter the products
  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  // Third UseEffect to sort the products
  useEffect(() => {
    if (sort === 'asc') {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
      {filteredProducts.length !== 0
        ? filteredProducts.map((item, index) => (
            <Product item={item} key={item.id} />
          ))
        : products.map((item, index) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
