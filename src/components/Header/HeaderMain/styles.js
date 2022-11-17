import styled from "styled-components";

export const HeaderMain = styled.header`
  width: 100%;
  min-height: 5rem;
  background-color: var(--color-grey-4);
`;

export const HeaderContainer = styled.div`
  max-width: 1600px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  gap: 1rem;
  padding: 0.5rem 1rem;

  @media (max-width: 568px) {
    justify-content: center;
    align-items: center;
  }
`;
