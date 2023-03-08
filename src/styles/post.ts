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
    button {
      /* width: 100vw; */
      height: 100vh;
      max-height: 6rem;
      font-size: 2.4rem;
      padding: 1.6rem 4rem;
      border: 0;
      border-radius: 5px;

      background-color: ${({ theme }) => theme.yellow};
    }
  }
`;
