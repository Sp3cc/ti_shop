import styled from "styled-components";

export const StyledUserPage = styled.main`
  .divContainer {
    display: flex;
    height: 86vh;
    width: 100vw;
    /* background-image: url(https://c.pxhere.com/photos/7c/47/keyboard_laptop_back_light_apple_keys_business_computer_back-910187.jpg!d); */
    background-image: url(https://www.papeldeparede.etc.br/fotos/wp-content/uploads/Teclado4-1024x640.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    /* background-color: gray; */

    /* .rigthSide > .teste > svg {
      font-size: 1rem;
    } */

    justify-content: space-between;
    align-items: center;
    justify-content: center;
    gap: 30px;

    main {
      border: solid black 2px;
      width: 45%;
      min-height: 50%;
      margin: 0;
      background-color: white;
      border-radius: 10px;
    }
  }
  form {
    display: flex;
    flex-direction: column;
    input {
      height: 40px;
      padding-left: 30px;
      font-size: 0.7rem;
    }
    .buttonSubmit {
      height: 40px;
      border-radius: 10px;
      margin-top: 10px;
      /* background-color: blueviolet; */
    }
  }

  header {
    width: 100vw;
    background-color: blueviolet;
    display: flex;
    justify-content: space-between;
    padding: 0 5rem;
    height: 80px;
    align-items: center;

    .leftSide > svg {
      font-size: 4rem;
    }

    .rigthSide > div > svg {
      font-size: 2rem;
      cursor: pointer;
    }

    div {
      display: flex;
      align-items: center;
      gap: 1rem;

      p {
        font-weight: bold;
      }

      .buttonLogout {
        font-weight: 500;
        padding: 0px 20px;
        width: 100px;
        border-radius: 25px;
        height: 40px;
        border: 1px solid black;
        color: black;
        background: blueviolet;
      }
    }
  }

  /* .bGHSXk form button {
    background-color: white;
  } */
`;
