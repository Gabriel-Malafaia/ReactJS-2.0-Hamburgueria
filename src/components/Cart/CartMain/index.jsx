import CartEmpty from "../CartEmpty"
import CartProduct from "../CartProduct"
import CartTotal from "../CartTotal"
import { CartHeader, CartMainContent } from "./styles"


const CartMain = ({productsCart,setProductsCart}) => {
    return (
        <CartMainContent>
            <CartHeader className="bg-color-primary">
                <h2 className="colorGrey4">Carrinho de compras</h2>
            </CartHeader>
            {productsCart.length <= 0 ? (
                <CartEmpty></CartEmpty>
            ): (
                <>
                    <CartProduct productsCart={productsCart} setProductsCart={setProductsCart}></CartProduct>
                    <CartTotal productsCart={productsCart} setProductsCart={setProductsCart}></CartTotal>
                </>
            )}
        </CartMainContent>
    )
}

export default CartMain