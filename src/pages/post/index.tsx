import React, { useContext, useState } from "react";
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
  const context = useContext(AppContext);

  const [selectTheme, setSelectTheme] = useState(textTheme.green.background);
  const [selectThemeText, setSelectThemeText] = useState(textTheme.green.color);
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
          colorTheme={selectThemeText}
          image={selectTheme}
          title={name}
          subtitle={`Fez uma contribuição para o repositório ${repo}`}
        />
        <footer>
          <div>
            <PostThemeButton
              onClick={() => {
                setSelectTheme(textTheme.orange.background);
                setSelectThemeText(textTheme.orange.color);
              }}
            >
              <ThemeButtonOrange />
            </PostThemeButton>
            <PostThemeButton
              onClick={() => {
                setSelectTheme(textTheme.green.background);
                setSelectThemeText(textTheme.green.color);
              }}
            >
              <ThemeButtonGreen />
            </PostThemeButton>
            <PostThemeButton
              onClick={() => {
                setSelectTheme(textTheme.blue.background);
                setSelectThemeText(textTheme.blue.color);
              }}
            >
              <ThemeButtonBlue />
            </PostThemeButton>
          </div>

          <PostDownloadButton
            onClick={() => {
              setSelectTheme(themeBk.green);
            }}
          >
            Download
          </PostDownloadButton>
        </footer>
      </PostContent>
    </PostContainer>
  );
}
