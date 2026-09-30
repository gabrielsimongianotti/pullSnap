import styled, { keyframes } from 'styled-components'
import { IoReloadSharp } from "react-icons/io5";

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  /* border: 1px solid red; */
`

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`

export const LoadSharp = styled(IoReloadSharp)`
  animation: ${rotateAnimation} 1s linear infinite;
`

export const SearchContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 77rem;

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
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 100vvw;
    height: 100vh;
    max-height: 6rem;
    font-size: 1.6rem;
    font-weight: 700;
    padding: 1.6rem 3.2rem;
    border: 0;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.yellow};
  }
`
