import { useEffect, useState } from "react";
import CartTotalTemplate from "./styles";

const CartTotal = ({ productsCart, setProductsCart}) => {
  const [totalSum, setTotalSum] = useState(0);

  const priceToBrl = totalSum.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });

  useEffect(() => {
    setTotalSum(
      productsCart.reduce((acc, cur) => {
        return acc + cur.price;
      }, 0)
    )
  }, [productsCart]);

  return (
    <>
      <CartTotalTemplate className="bg-color-grey-4">
        <div>
          <p className="fontTitle3 colorGrey1">Total</p>
          <p className="fontTitle3 colorGrey2">{priceToBrl}</p>
        </div>

        <button onClick={() => setProductsCart([])} className="fontText3 colorGrey2 bg-color-grey-3">
          Remover Todos
        </button>
      </CartTotalTemplate>
    </>
  );
};

export default CartTotal;
