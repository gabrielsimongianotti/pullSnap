import styled from "styled-components";

export const HeaderContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderContent = styled.div`
  width: 100vw;
  max-width: 112rem;

  h1 {
    font-size: 3.2rem;
    padding: 2rem;
  }

  /* border: 1px solid red; */
`;
