import { useEffect, useState } from "react";
import GlobalStyle from "./styles/GlobalStyles";
import request from "./services/RequestApi";
import Header from "./components/Header/HeaderMain";
import MainContent from "./styles/App";
import CartMain from "./components/Cart/CartMain";
import ProductMain from "./components/ProductList/ProductMain";
import Colors from "./styles/Colors";
import Fonts from "./styles/Fonts";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [listProductsApi, setListProductsApi] = useState([]);
  const [listProductsFilter, setListProductsFilter] = useState([]);
  const [productsCart, setProductsCart] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    request
      .get("/products/")
      .then((res) => {
        setListProductsApi(res.data);
        setListProductsFilter(res.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <GlobalStyle />
      <Colors></Colors>
      <Fonts></Fonts>

      <Header
        listProductsApi={listProductsApi}
        listProductsFilter={listProductsFilter}
        setListProductsFilter={setListProductsFilter}
      ></Header>

      <MainContent>
        {isLoading ? (
          <h1 className="chargerContent colorGrey1">Carregando Produtos....</h1>
        ) : (
          <ProductMain
            listProductsApi={listProductsApi}
            listProductsFilter={listProductsFilter}
            setListProductsFilter={setListProductsFilter}
            productsCart={productsCart}
            setProductsCart={setProductsCart}
          ></ProductMain>
        )}
        <CartMain
          productsCart={productsCart}
          setProductsCart={setProductsCart}
        ></CartMain>
      </MainContent>
    </div>
  );
};

export default App;
