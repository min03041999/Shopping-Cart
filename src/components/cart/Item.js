import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartQuantity,
} from "../../store/actions/cartActions";

const Item = (props) => {
  const item = props.item;
  const dispatch = useDispatch();
  const [btnVisible, setBtnVisible] = useState(false);

  //Change Quantity
  const [quantity, setQuantity] = useState(props.item.quantity);
  const handleChange = (e) => {
    if (e.target.value <= 0) {
      alert("Quantity must be greater than or equal to 1");
      return;
    }
    if (e.target.value > item.product.amount) {
      alert("You have exceeded the available items of this product!");
      return;
    }

    if (quantity !== e.target.value) {
      setQuantity(e.target.value);
      setBtnVisible(true);
    }
  };

  //Update Quantity
  const updateQuantity = (productID, quantity) =>
    dispatch(updateCartQuantity(productID, quantity));
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(item.product.id, quantity);
    updateQuantity(item.product.id, quantity);
    setBtnVisible(false);
  };

  //Remove Cart
  const removeCart = (productId) => dispatch(removeFromCart(productId));
  const handleRemoveCart = (e) => {
    // console.log(item.product.id);
    removeCart(item.product.id);
  };

  return (
    <div className="row">
      <div className="col-xs-2">
        <img
          className="img-responsive"
          src={item.product.image}
          alt={item.product.image}
        />
      </div>
      <div className="col-xs-4">
        <h4 className="product-name">
          <strong>{item.product.title}</strong>
        </h4>
      </div>
      <div className="col-xs-6">
        <div className="col-xs-3 text-right">
          <h6>
            <strong>
              {item.product.price} <span className="text-muted">x</span>
            </strong>
          </h6>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="col-xs-4">
            <input
              type="number"
              className="form-control input-sm"
              value={quantity}
              onChange={handleChange}
            />
          </div>
          {btnVisible ? (
            <div className="col-xs-2">
              <button type="submit" className="btn btn-info">
                Update
              </button>
            </div>
          ) : null}
          <div className="col-xs-2">
            <button
              type="button"
              className="btn btn-link btn-xs"
              onClick={handleRemoveCart}
            >
              <span className="glyphicon glyphicon-trash"> </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Item;
