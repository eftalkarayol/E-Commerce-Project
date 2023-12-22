const initialState = {
  products: [],
  isLoading: true,
  isError: false,
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
        isLoading: false,
        isError: false,
      };
    case "SET_ERROR":
      return { ...state, isError: true, isLoading: false };

    default:
      return state;
  }
};
