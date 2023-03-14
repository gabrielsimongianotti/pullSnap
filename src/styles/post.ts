import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5.6rem;

  flex-direction: column;

  /* border: 1px solid red; */
`;

export const PostContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  max-width: 80rem;
  height: 100bh;

  /* border: 1px solid green; */

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
  max-height: 1rem;
  max-width: 6rem;
  border: 0;

  background: transparent;
`;

export const PostDownloadButton = styled.button`
  height: 100vh;
  max-height: 6rem;
  font-size: 2.4rem;
  border: 0;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.yellow};
`;
