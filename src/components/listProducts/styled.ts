import styled from "styled-components";

export const StyledUserPage = styled.main`
  /* width: 48%; */
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-top: 30px;
    margin-bottom: 75px;
  }

  ul {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 5px;
    overflow-y: scroll;
    max-height: 95%;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      border: 1px solid black;
      border-radius: 8px;
      /* max-height: 30px; */

      h4 {
        margin: 0;
        padding: 0;
      }
    }
  }
`;
