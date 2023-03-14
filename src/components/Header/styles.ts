import styled from "styled-components";

export const HeaderContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  max-width: 112rem;
  padding: 2rem;

  h1 {
    width: 100%;
    font-size: 3.2rem;
  }

  div {
    max-width: 20rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.8rem;

    span {
      font-size: 2rem;
    }
    button {
      background: transparent;
      color: white;
      border: none;
      font-size: 2rem;
    }
  }
`;
