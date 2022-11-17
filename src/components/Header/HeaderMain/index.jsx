import InputSearch from "../InputSearch";
import Logo from "../Logo";
import { HeaderMain, HeaderContainer } from "./styles";

const Header = ({listProductsApi,listProductsFilter,setListProductsFilter,}) => {
  return (
    <HeaderMain>
      <HeaderContainer>
        <Logo />
        <InputSearch
          listProductsApi={listProductsApi}
          listProductsFilter={listProductsFilter}
          setListProductsFilter={setListProductsFilter}
        />
      </HeaderContainer>
    </HeaderMain>
  );
};

export default Header;
