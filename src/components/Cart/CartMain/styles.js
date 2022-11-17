import styled from "styled-components";

export const CartMainContent = styled.aside`
  min-width: 310px;
  max-width: 398px;
  width: 100%;
  padding: 1rem;

  @media (max-width: 1080px) {
    margin: auto;
    width: 100%;
    max-width: 1000px;
    margin-top: 2rem;
  }
`;

export const CartHeader = styled.div`
  width: 100%;
  height: 65px;
  border-radius: 6px 6px 0 0;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;
