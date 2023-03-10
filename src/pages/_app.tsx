// import "@/styles/globals.ts";
import { Header } from "@/components/Header";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "@/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </AppProvider>
  );
}
