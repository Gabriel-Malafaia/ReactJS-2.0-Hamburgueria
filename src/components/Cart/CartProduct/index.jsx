import { CartProductItem, CartProductList } from "./styles";

const CartProduct = ({ productsCart, setProductsCart }) => {

    const removeFromCart = (idItem) => {
        const idClick = Number(idItem)
        const arrayFiltered = productsCart.filter(elem => elem.id !== idClick)
        setProductsCart(arrayFiltered)
    }

  return (
    <CartProductList className="bg-color-grey-4">
      {productsCart.map((product) => {
        const { name, id, img, category } = product;
        return (
          <CartProductItem isOpening={true} key={`${id} ${name}`}>
            <div>
              <img className="bg-color-grey-3" src={img} alt={name} />
              <div>
                <h3 className="fontTitle colorGrey1">{name}</h3>
                <p className="fontText3 colorGrey2">{category}</p>
              </div>
            </div>

            <button id={id} onClick={(e) => removeFromCart(e.target.id)} className="fontTitle4 colorGrey2">Remover</button>
          </CartProductItem>
        );
      })}
    </CartProductList>
  );
};

export default CartProduct;
