import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100vw;
  background-color: blueviolet;
  height: 60px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 0;
  left: 0;

  svg {
    font-size: 2rem;
    cursor: pointer;
  }
  ul {
    display: flex;
    gap: 25px;
  }

  li {
    font-size: 1rem;
  }
`;
