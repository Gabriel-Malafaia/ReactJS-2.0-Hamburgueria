import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Form from "./styles";


const InputSearch = ({listProductsApi,listProductsFilter,setListProductsFilter}) => {
  const [valueInput, setValueInput] = useState("");

  const searchItem = () => {
    const treatmentInput = valueInput.toLowerCase().trim()
    const filterProducts = listProductsFilter.filter(product => (product.name).toLowerCase().trim().includes(treatmentInput))
    if(filterProducts.length <= 0) {
        setListProductsFilter(listProductsApi)
        toast.error("Produto não encontrado!", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    } else if(treatmentInput.length == 0) {
        setListProductsFilter(listProductsApi)
    } else {
        setListProductsFilter(filterProducts)
    }
    
  }

  return (
    <Form onSubmit={(e) => {
        e.preventDefault()
        searchItem()
    }}>
      <input
        onChange={(e) => setValueInput(e.target.value)}
        className="colorGrey2 fontText3"
        placeholder="Digitar Pesquisa"
        type="search"
      />
      <button 
      className="buttonDefault 
      medium bg-color-primary" 
      type="submit">
        Pesquisar
      </button>
    </Form>
  );
};

export default InputSearch;
