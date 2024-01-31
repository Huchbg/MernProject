"use client";

import StyledComponentsRegistry from "../lib/registry";
import { theme, GlobalStyles } from "@/styles";
import { ThemeProvider } from "styled-components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Project 1</title>
      </head>
      <body>
        <StyledComponentsRegistry>
          <>
            <GlobalStyles />
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
