import axios from "axios";

export const getProducts = () => (dispatch) => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) =>
      // Api'den gelen verileri reducer'a gönderiyoruz.
      dispatch({ type: "SET_PRODUCTS", payload: res.data })
    )
    .catch((err) => dispatch({ type: "SET_ERROR", payload: err }));
};
