import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import Layout from "./components/Layout.tsx";
import App from "./App.tsx";
import PortfolioPage from "./container/PortfolioPage.tsx";
import AboutsPage from "./container/AboutsPage.tsx";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
import { mode } from "@chakra-ui/theme-tools";
import "./reset.css";
import "./styles.css";
import PageNotFound from "./container/404Page.tsx";

const themes = {
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        position: "relative",
        color: mode("#ffffff", "#003036")(props),
        bg: mode(
          "linear-gradient(15deg, #003036, #191919 60%) bottom no-repeat",
          "linear-gradient(15deg, #C7F8FF, #F4F4F4 60%) bottom no-repeat"
        )(props),
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        overscrollBehavior: "none",
      },
    }),
  },
};

const theme = extendTheme(themes);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/about" element={<AboutsPage />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
