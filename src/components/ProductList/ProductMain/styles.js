import styled from "styled-components";

const ListProductsMain = styled.ul`
  width: 70%;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  overflow-x: auto;
  padding: 1rem;

  @media (max-width: 1360px) {
    max-width: 680px;
  }

  @media (max-width: 1080px) {
    width: 100%;
    max-width: none;
    justify-content: center;
  }

  @media (max-width: 665px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`;

export default ListProductsMain;
