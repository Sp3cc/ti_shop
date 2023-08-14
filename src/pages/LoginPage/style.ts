import styled from "styled-components";

export const StyledLoginPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  section {
    height: 500px;
  }
  .firstSection {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    padding-top: 125px;
    border-radius: 40px 0px 0px 40px;
    border: 1px solid gray;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .submitButton {
      padding: 0px 40px;
      width: 235px;
      border-radius: 25px;
      height: 40px;
      border: none;
      color: black;
      background: blueviolet;
    }

    input {
      width: 300px;
      height: 40px;
      background-color: #403b3a21;
      border: none;
    }
  }

  .divInput {
    width: cover;
    height: cover;
    display: flex;
    align-items: center;
    /* gap: 5px; */

    svg {
      border-top: 1px solid gray;
      border-left: 1px solid gray;
      border-bottom: 1px solid gray;
      padding: 10px;
      padding: 11px;
      margin-top: 3px;
    }
  }

  h1 {
    margin-bottom: 30px;
  }

  div > svg {
    font-size: 10rem;
  }
`;

export const StyledDivForm = styled.div`
  background-color: white;
`;
