import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 7.7rem;
`
export const FooterContent = styled.div`
  width: 100%;
  max-width: 112rem;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-size: 2rem;
      font-weight: 700;
    }
  }

  /* border: 1px solid red; */
`
