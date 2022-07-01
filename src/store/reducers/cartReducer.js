const initialState = {
  // cart: [],
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
};
const cartReducer = (state = initialState, action) => {
  let cart = state.cart;
  switch (action.type) {
    case "ADD_TO_CART":
      cart.push(action.payload);
      localStorage.setItem("cart", JSON.stringify(cart));
      return {
        ...state,
        cart: cart,
      };
    case "UPDATE_CART_QUANTITY":
      let item = cart.find(
        (item) => item.product.id === action.payload.productId
      );
      let newCart = cart.filter(
        (item) => item.product.id !== action.payload.productId
      );
      item.quantity = action.payload.quantity;
      newCart.push(item);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return {
        ...state,
        cart: newCart,
      };
    case "REMOVE_FROM_CART":
      let deleteCart = cart.filter(
        (item) => item.product.id !== action.payload.productId
      );
      localStorage.setItem("cart", JSON.stringify(deleteCart));
      return {
        ...state,
        cart: deleteCart,
      };
    default:
      return state;
  }
};
export default cartReducer;
