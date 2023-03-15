import styled, { css } from "styled-components";
import { StaticImageData } from "next/image";
import { ValueOf } from "next/dist/shared/lib/constants";

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding-top: 5.6rem;
`;
export const CardContent = styled.div`
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: relative;
  }
`;

export const CardH1 = styled.h1`
  color: ${(props) => props.color};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 4rem;
  max-width: 60%;
  position: absolute;
  top: 1.7rem;
  left: 13.3rem;

  @media (max-width: 600px) {
    font-size: 2rem;
    top: 1.56;
    left: 6.8rem;
  }
`;

export const CardSpan = styled.span`
  color: ${(props) => props.color};
  font-size: 2rem;
  max-width: 60%;
  position: absolute;
  top: 8rem;
  left: 13.3rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    top: 4rem;
    left: 6.8rem;
  }
`;
