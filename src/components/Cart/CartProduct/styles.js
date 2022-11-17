import styled, { keyframes } from "styled-components";
import { open } from "../../ProductList/Product/styles";

export const CartProductList = styled.ul`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CartProductItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  animation: ${open} 0.3s ease-in;

  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 5px;
  }

  div {
    max-width: 75%;
    word-wrap: break-word;
    display: flex;
    align-items: flex-start;
    gap: 0.5rem;
  }

  div div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  button {
    margin-top: 5px;
    transition: ease 0.3s;

    :hover {
      color: var(--negative);
    }
  }
`;
