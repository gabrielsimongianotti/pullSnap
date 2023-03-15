import type { AppProps } from "next/app";
import { AppProvider } from "@/context";
import { ThemeProvider } from "styled-components";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { defaultTheme } from "@/styles/themes/default";
import { GlobalStyle } from "@/styles/global";

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
