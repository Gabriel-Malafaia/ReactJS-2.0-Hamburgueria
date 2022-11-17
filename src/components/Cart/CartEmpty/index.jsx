import ContentCartEmpty from "./styles"

const CartEmpty = () => {
    return(
        <>
            <ContentCartEmpty className="bg-color-grey-4">
                <h2 className="fontTitle2 colorGrey1">Sua sacola está vazia</h2>
                <p className="fontText1 colorGrey2">Adicione um item</p>
            </ContentCartEmpty>
        </>
    )
}

export default CartEmpty