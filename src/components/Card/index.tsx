import { 
  CardContainer, 
  CardContent, 
  CardH1, 
  CardSpan 
} from "./styles";

import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  title?: string;
  subtitle: string;
  colorTheme: string;
  prUrl: string | undefined
}

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
