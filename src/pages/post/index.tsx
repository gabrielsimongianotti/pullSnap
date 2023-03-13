import React, { useContext, useState } from "react";
import { useRouter } from "next/router";

import {
  PostContainer,
  PostContent,
  PostDownloadButton,
  PostThemeButton,
} from "@/styles/post";
import { Search } from "@/components/Search";
import { Card } from "@/components/Card";
import { Banner } from "@/components/Pdf";

import bkImgGreen from "../../assets/bgCardGreen.jpg";
import bgCardOrange from "../../assets/bgCardOrange.jpg";
import bgCardBlue from "../../assets/bgCardBlue.jpg";
import ThemeButtonBlue from "@/assets/icons/themeButtonBlue";
import ThemeButtonGreen from "@/assets/icons/themeButtonGreen";
import ThemeButtonOrange from "@/assets/icons/themeButtonOrange";
import { AppContext } from "@/context";

const themeBk = {
  blue: bgCardBlue,
  orange: bgCardOrange,
  green: bkImgGreen,
};

const textTheme = {
  blue: {
    color: "#2188FF",
    background: themeBk.blue,
  },
  green: {
    color: "#ffffff",
    background: themeBk.green,
  },
  orange: {
    color: "#FB8532",
    background: themeBk.orange,
  },
};

export default function Post() {
  const router = useRouter()
  const context = useContext(AppContext);
  const [theme, setTheme] = useState<'blue'|'green'|'orange'>("green");
  const [name, setName] = useState(context.user?.name);
  const repo = context.user?.repo;

  return (
    <PostContainer>
      <PostContent>
        <Search
          label="Editar nome"
          textButton="Editar"
          action={(name) => setName(name)}
        />
        <Card
          colorTheme={textTheme[theme]['color']}
          image={textTheme[theme]['background']}
          title={name}
          subtitle={`Fez uma contribuição para o repositório ${repo}`}
        />
        <footer>
          <div>
            <PostThemeButton
              onClick={() => {
                setTheme("orange")
              }}
            >
              <ThemeButtonOrange />
            </PostThemeButton>
            <PostThemeButton
              onClick={() => {
                setTheme("green")
              }}
            >
              <ThemeButtonGreen />
            </PostThemeButton>
            <PostThemeButton
              onClick={() => {
                setTheme('blue')
              }}
            >
              <ThemeButtonBlue />
            </PostThemeButton>
          </div>
       
          { context.user?.repo === '????' 
          ? 
            <PostDownloadButton onClick={()=>{router.back()}}>
              voltar
            </PostDownloadButton>
          :
            <PostDownloadButton>
              <Banner name={name}repo={repo} theme={theme}/>
            </PostDownloadButton>
          }
        </footer>
      </PostContent>
    </PostContainer>
  );
}
