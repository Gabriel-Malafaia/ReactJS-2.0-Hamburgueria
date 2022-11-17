import styled, { keyframes } from "styled-components";

export const open = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const closed = keyframes`
 from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

const StyledProduct = styled.li`
  min-width: 300px;
  height: 346px;
  border: 2px solid var(--color-grey-3);
  border-radius: 8px;
  transition: 0.3s;
  animation: ${open} 0.6s ease;

  :hover {
    transform: scale(1.03);
    box-shadow: 1px 1px 10px grey;
    cursor: pointer;
  }

  button {
    transition: 0.3s;
  }

  :hover button {
    filter: brightness(1.2);
  }

  img {
    width: 100%;
    height: 45%;
    border-radius: 6px 6px 0 0;
    object-fit: contain;
    background-color: var(--color-grey-4);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
  }
`;

export default StyledProduct;
