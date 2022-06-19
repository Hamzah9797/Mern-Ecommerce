import * as actionTypes from "../constants/cartConst";

// reducer that will handle all items in our cart
export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // we create an item that needs to be added from action.payload
      const item = action.payload;
      // now we check mif this item already exists in our cart
      const existItem = state.cartItems.find((x) => x.product === item.product);
      // if it exists replace it with the new version of it that just came and if it doesnt just add it for first time
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(
            (x) => (x.product === existItem.product ? item : x)
            // product over here means id
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        // only return a new array thet doesnt have the item we wanted to remove
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
