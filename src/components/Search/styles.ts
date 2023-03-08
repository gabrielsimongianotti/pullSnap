import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 72.8rem;
  padding: 0 2rem;

  input {
    width: 100%;
    height: 6rem;
    border-radius: 5px;

    padding: 1.2rem 2rem;

    color: white;
    font-size: 1.5rem;
    border: 0;

    background-color: ${({ theme }) => theme.shape};
  }
  button {
    width: 100vvw;
    height: 100vh;
    max-height: 6rem;
    font-size: 1.6rem;
    padding: 1.8rem;
    border: 0;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.yellow};
  }
`;
