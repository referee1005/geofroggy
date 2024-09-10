// pages/_app.js
import * as React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import DefaultLayout from "../components/layout/DefaultLayout";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "../store";
import "@/styles/globals.css";

// Create a MUI theme instance
const theme = createTheme({
  palette: {
    mode: "light" // You can change this to 'dark' or handle it dynamically
  }
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence>
          <div className="bg-secondary-light dark:bg-primary-dark transition duration-300 font-inter">
            <DefaultLayout>
              <Component {...pageProps} />
            </DefaultLayout>
          </div>
        </AnimatePresence>
      </ThemeProvider>
    </Provider>
  );
}
