import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
:focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.white};
  }


html{
    font-size: 62.5%;
}

body{
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};

  -webkit-font-smoothing: antialiased;

  width:100%;
  /* height:100vh; */
}

body,
  input,
  textarea,
  button {
    font-family: 'Martel-sans', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

a, button, img{
    cursor: pointer;
}

a{
    color: inherit; // poe a cor do link a mesma do elemento pai
    text-decoration:none; //tirar o underline dos links
}

`;
