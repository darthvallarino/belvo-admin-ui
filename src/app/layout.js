"use client";
import "./globals.css";
import ThemeProvider from "@/theme";
import StoreProvider from "@/app/StoreProvider";
import { ModalStack } from "@mattjennings/react-modal-stack";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <StoreProvider>
            <ModalStack>{children}</ModalStack>
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
