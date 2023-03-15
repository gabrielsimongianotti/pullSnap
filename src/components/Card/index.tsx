import Image from "next/image";

import { CardContainer, CardContent, CardH1, CardSpan } from "./styles";

import { CardProps } from "./types";

export function Card({ image, title, subtitle, colorTheme, prUrl }: CardProps) {
  return (
    <CardContainer>
      <CardContent>
        <a href={prUrl} target="_blank">
          <Image src={image} alt="" />
          <CardH1 color={colorTheme}>{title}</CardH1>
          <CardSpan color={colorTheme}>{subtitle} </CardSpan>
        </a>
      </CardContent>
    </CardContainer>
  );
}
