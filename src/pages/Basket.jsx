import React from "react";
import { useSelector } from "react-redux";
import BasketItem from "../components/BasketItem";

const Basket = () => {
  const state = useSelector((store) => store.basketReducer);

  return (
    <div className="row">
      {state.basket.length === 0 && (
        <h3 className="text-center mt-5">Sepete Ürün Ekleyiniz...</h3>
      )}
      {state.basket.length > 0 && (
        <>
          <div className="col-md-9">
            {state.basket.map((item) => (
              <BasketItem key={item.id} item={item} />
            ))}
          </div>

          <div className="col-md-3 mt-5">
            <h5>Toplam: ${state.total.toFixed(2)}</h5>
            <button
              onClick={() =>
                alert("Ödeme tamamlandı, ücret" + state.total.toFixed(2))
              }
              className="btn btn-success mt-3"
            >
              Alışverişi tamamla
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Basket;
