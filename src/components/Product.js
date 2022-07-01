import React, { useState } from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
  // console.log(props);
  const product = props.product;
  const [inCart, setInCart] = useState(props.inCart);
  // console.log(inCart);
  const addToCart = (e) => {
    e.preventDefault();
    props.addtoCartf(product);
    setInCart(true);
  };

  return (
    <div className="col-md-3">
      <figure className="card card-product">
        <div className="img-wrap">
          <img
            className="img-responsive"
            src={product.image}
            alt={product.image}
          />
        </div>
        <figcaption className="info-wrap">
          <h4 className="title">{product.title}</h4>
          <p className="desc">{product.description}</p>
        </figcaption>
        <div className="bottom-wrap">
          {inCart ? (
            <span className="btn btn-success">Added to cart</span>
          ) : (
            <Link
              to="/"
              onClick={addToCart}
              className="btn btn-sm btn-primary float-right"
            >
              Add to cart
            </Link>
          )}
          <div className="price-wrap h5">
            <span className="price-new">${product.price}</span>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default Product;
