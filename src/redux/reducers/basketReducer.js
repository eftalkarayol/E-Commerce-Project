const initialState = {
  basket: [],
  total: 0,
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // add to basket
      const index = state.basket.findIndex((i) => i.id === action.payload.id);

      if (index >= 0) {
        const clone = [...state.basket];
        clone[index].amount++;

        return {
          basket: clone,
          total: state.total + action.payload.price,
        };
      } else {
        const newBasket = state.basket.concat({ ...action.payload, amount: 1 });

        return {
          basket: newBasket,
          total: state.total + action.payload.price,
        };
      }
    case "REMOVE_ITEM":
      const found = state.basket.findIndex((i) => i.id === action.payload.id);
      if (found >= 0 && action.payload.amount > 1) {
        const clone = [...state.basket];
        clone[found].amount--;
        return {
          basket: clone,
          total: state.total - clone[found].price,
        };
      } else {
        const newBasket = state.basket.filter(
          (i) => i.id !== action.payload.id
        );
        return {
          basket: newBasket,
          total: state.total - action.payload.price,
        };
      }
      return state;
    default:
      return state;
  }
};
