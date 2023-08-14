import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

html,
body,
header,
ul,
li,
img,
p,
h1,
h2,
h3,
nav,
div,
a,
section {
  font-family: 'Inter', sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
  color: #2d2d2d;
  font-size: 16px;
  text-decoration: none;
  outline: none;
  border: none;
  box-sizing: border-box;
}


  button{
    cursor: pointer;
  }
  `;
