import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 365px;
  width: 100%;
  height: 60px;
  padding: 5px;
  border: 2px solid var(--color-grey-3);
  border-radius: 5px;
  background-color: #fff;
  transition: all 0.3s;

  input {
    width: 70%;
    border-radius: 5%;
    font-size: 18px;
    cursor: pointer;
    height: 100%;
  }

  :hover {
    border: 2px solid black;
  }

  input::placeholder {
    color: var(--color-grey-3);
  }
`;

export default Form;
