import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./globals.css";
import SSEContextProvider from "@/context/SSEContext";

export const metadata: Metadata = {
  title: "Sports Voting App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <SSEContextProvider>
            <ToastContainer autoClose={200} />
            {children}
          </SSEContextProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
