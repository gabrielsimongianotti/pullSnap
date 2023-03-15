import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5.6rem;

  flex-direction: column;
`;

export const PostContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 77rem;
  padding: 0 2rem;

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    margin-top: 6.4rem;

    div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      gap: 4rem;
    }
  }
`;

export const PostThemeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 6.4rem;
  max-height: 6.4rem;

  opacity: 0.5;

  transition: 0.5s;

  background: transparent;

  :hover {
    max-width: 6.4rem;
    max-height: 6.4rem;
    opacity: 1;
    border: 6px solid ${({ theme }) => theme.yellow};
    border-radius: 50%;
  }
`;

export const PostDownloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1.6rem 3.2rem;
  height: 100vh;
  max-height: 6rem;
  font-size: 2.4rem;
  border: 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.yellow};
`;
