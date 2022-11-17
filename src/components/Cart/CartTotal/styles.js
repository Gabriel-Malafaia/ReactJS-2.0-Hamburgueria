import styled from "styled-components";

const CartTotalTemplate = styled.div`
  border-top: 2px solid var(--color-grey-3);
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  border-radius: 0 0 6px 6px;

  div {
    display: flex;
    justify-content: space-between;
  }

  button {
    height: 60px;
    border-radius: 6px;
    transition: ease 0.3s;
  }

  button:hover {
    background-color: var(--color-grey-2);
    color: #fff;
  }
`;

export default CartTotalTemplate;
