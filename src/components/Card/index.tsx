import { CardContainer, CardContent, CardH1, CardSpan } from "./styles";

import bkImgGreen from "../../assets/bgCardGreen.jpg";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title?: string;
  subtitle: string;
  colorTheme: string;
}

export function Card({ image, title, subtitle, colorTheme }: CardProps) {
  return (
    <CardContainer>
      <CardContent>
        <Image src={image} alt="" />
        <CardH1 color={colorTheme}>{title}</CardH1>
        <CardSpan color={colorTheme}>{subtitle} </CardSpan>
      </CardContent>
    </CardContainer>
  );
}
