import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}

input:focus {
  outline: 0;
}


html{
    font-size: 62.5%;
}

body{
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.title};

  -webkit-font-smoothing: antialiased;

  width:100%;
}

body,
  input,
  textarea,
  button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

a, button, img{
    cursor: pointer;
}

a{
    color: inherit;
    text-decoration: none;
}

`
