import React from "react";
import { PostContainer, PostContent } from "@/styles/post";
import { Search } from "@/components/Search";
import { Card } from "@/components/Card";

import bkImgGreen from "../../assets/bgCardGreen.jpg";

// import themeButtonOrange from "../../assets/themeButtonOrange.svg";
import themeButtonOrange from "../../../public/themeButtonOrange.svg";

export default function Post() {
  return (
    <PostContainer>
      <PostContent>
        <Search />
        <Card
          image={bkImgGreen}
          title={"Gabriel Simon Gianotti"}
          subtitle={"Fez uma contribuição para o repositório"}
        />
        <footer>
          {/* <Image src={themeButtonOrange} alt="" /> */}
          <button>Download</button>
        </footer>
      </PostContent>
    </PostContainer>
  );
}
