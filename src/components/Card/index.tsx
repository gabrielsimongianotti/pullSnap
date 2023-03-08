import { CardContainer, CardContent } from "./styles";

import bkImgGreen from "../../assets/bgCardGreen.jpg";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title: string;
  subtitle: string;
}

export function Card({ image, title, subtitle }: CardProps) {
  return (
    <CardContainer>
      <CardContent>
        <Image src={image} alt="" />
        <h1>{title}</h1>
        <span>{subtitle} </span>
      </CardContent>
    </CardContainer>
  );
}
