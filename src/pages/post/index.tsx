import React, { useState } from "react";
import { PostContainer, PostContent } from "@/styles/post";
import { Search } from "@/components/Search";
import { Card } from "@/components/Card";
import { Banner } from "@/components/Pdf";

import bkImgGreen from "../../assets/bgCardGreen.jpg";
import bgCardOrange from "../../assets/bgCardOrange.jpg";
import bgCardBlue from "../../assets/bgCardBlue.jpg";

// import themeButtonOrange from "../../assets/themeButtonOrange.svg";

const theme = {
  bleu: bgCardBlue,
  orange: bgCardOrange,
  green: bkImgGreen
}
export default function Post() {
  const [selectTheme, setSelectTheme]= useState(theme.bleu)
  const [name, setName]= useState('Gabriel Simon Gianotti')
  const repo ="ropeorpsdkflksdmf"
  return (
    <PostContainer>
      <PostContent>
        <Search label='Editar nome' textButton="Editar" action={(name)=>setName(name)}/>
        <Card
          image={selectTheme}
          title={name}
          subtitle={`Fez uma contribuição para o repositório ${repo}`}
        />
        <footer>
          {/* <Image src={themeButtonOrange} alt="" /> */}
          <button onClick={()=>{setSelectTheme(theme.green)}}>Download</button>
          {/* <Banner/> */}
        </footer>
      </PostContent>
    </PostContainer>
  );
}
