import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.midGray};
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const HeaderContent = styled.div`
  width: 100vw;
  max-width: 112rem;
  height: 5rem;

  /* border: 1px solid red; */
`;
