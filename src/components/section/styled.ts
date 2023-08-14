import styled from "styled-components";

export const StyledSection = styled.section`
  min-width: 25%;
  display: flex;
  flex-direction: column;
  background-color: blueviolet;
  align-items: center;
  padding-top: 80px;
  border-radius: 0px 40px 40px 0px;

  h2 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  p {
    font-size: 0.7rem;
    color: white;
    margin-bottom: 20px;
  }

  svg {
    font-size: 8rem;
    margin-bottom: 50px;
  }

  button {
    padding: 0px 40px;
    width: 200px;
    border-radius: 25px;
    height: 40px;
    border: 2px solid black;
    color: black;
    background: none;
  }
`;
