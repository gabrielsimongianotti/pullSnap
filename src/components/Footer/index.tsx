import { FooterContainer, FooterContent } from "./styles";
import { AiFillGithub } from "react-icons/ai";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <AiFillGithub size={30} />
        <span>Github</span>
      </FooterContent>
    </FooterContainer>
  );
}
