import StyledProduct from "./styles";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = ({product,listProductsApi,productsCart,setProductsCart}) => {
  const { id, name, category, price, img } = product;

  const priceToBrl = price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "BRL",
  });

  const addToCart = (idItem) => {
    const verifyIdExists = productsCart.some((elem) => elem.id == idItem);
    if (verifyIdExists) {
      toast.error("Produto já inserido!", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setProductsCart([...productsCart, listProductsApi[idItem - 1]]);
    }
  };

  return (
    <StyledProduct>
      <img src={img} alt={name} />
      <div>
        <h2 className="fontTitle2 colorGrey1">{name}</h2>
        <p className="fontText2 colorGrey2">{category}</p>
        <p className="fontTitle3 colorPrimary">{priceToBrl}</p>
        <button
          id={id}
          onClick={(e) => addToCart(e.target.id)}
          className="buttonDefault medium bg-color-primary"
        >
          Adicionar
        </button>
      </div>
    </StyledProduct>
  );
};

export default Product;
