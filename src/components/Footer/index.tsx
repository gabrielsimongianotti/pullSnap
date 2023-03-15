import { FooterContainer, FooterContent } from "./styles";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Link
          href="https://github.com/gabrielsimongianotti/pullSnap"
          target={"_blank"}
        >
          <AiFillGithub size={30} />
          <span>Github</span>
        </Link>
      </FooterContent>
    </FooterContainer>
  );
}
