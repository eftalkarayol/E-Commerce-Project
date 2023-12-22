import React from "react";
import { useSelector } from "react-redux";
import { productReducer } from "./../redux/reducers/productReducer";

const MainPage = () => {
  const state = useSelector((store) => store.productReducer);
  return (
    <div>
      {state.isLoading ? (
        <h1>Yükleniyor...</h1>
      ) : (
        <div>
          {state.products.map(() => (
            <div>KART</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPage;
