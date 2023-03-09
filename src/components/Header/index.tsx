import Link from "next/link";
import { HeaderContainer, HeaderContent } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link href='/'>
          <h1>Pull Snap</h1>
        </Link>
      </HeaderContent>
    </HeaderContainer>
  );
}
