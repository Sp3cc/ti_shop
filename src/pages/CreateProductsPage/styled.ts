import styled from "styled-components";

export const StyledCreateProduct = styled.main`
  margin-top: 30rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  form {
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom: 54px;
    margin-top: 70px;

    input {
      border-radius: 8px;
      border: 1px solid black;
    }

    .buttonSubmit {
      background-color: blueviolet;
      border: 1px solid black;
    }
  }
`;
