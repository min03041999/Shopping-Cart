import React from "react";
import Product from "./Product";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";

const ProductList = () => {
  const productList = useSelector((state) => state.product);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const addtoCartf = (product) => dispatch(addToCart(product));

  return (
    <div className="container">
      <h2>Product List</h2>
      <br />
      <div className="row">
        {productList.products.map((product) => (
          <Product
            product={product}
            inCart={
              cart.length > 0 &&
              cart.filter((e) => e.product.id === product.id).length > 0
            }
            addtoCartf={addtoCartf}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
