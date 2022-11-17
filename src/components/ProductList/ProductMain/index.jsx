import Product from "../Product";
import ListProductsMain from "./styles";

const ProductMain = ({listProductsApi,listProductsFilter,setProductsCart,productsCart}) => {
  return (
    <ListProductsMain>
      {listProductsFilter.map((product) => {
        return (
          <Product
            key={product.id}
            listProductsApi={listProductsApi}
            productsCart={productsCart}
            setProductsCart={setProductsCart}
            product={product}
          ></Product>
        );
      })}
    </ListProductsMain>
  );
};

export default ProductMain;
