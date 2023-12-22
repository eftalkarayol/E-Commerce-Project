const initialState = {
  basket: [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return state;
    case "SET_ERROR":
      return state;

    default:
      return state;
  }
};
