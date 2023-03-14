// import "@/styles/globals.ts";
import { Header } from "@/components/Header";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/themes/default";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "@/context";
import { Footer } from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <ThemeProvider theme={defaultTheme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
        <Footer />
      </ThemeProvider>
    </AppProvider>
  );
}
