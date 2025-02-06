// pages/_app.js
import * as React from "react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import DefaultLayout from "../components/layout/DefaultLayout";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { useRouter } from "next/router";
import Loading from "@/components/Loading";
import store from "../store";
import "@/styles/globals.css";
import '@fontsource/inter'; // Defaults to 400 weight
import '@fontsource/montserrat'; // Defaults to 400 weight
import '@fontsource/lexend'; // Defaults to 400 weight

// Create a MUI theme instance
const theme = createTheme({
  palette: {
    mode: "light", // You can change this to 'dark' or handle it dynamically
  },
});

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AnimatePresence>
          <div className="bg-secondary-light dark:bg-primary-dark transition duration-300 font-inter">
            <DefaultLayout>
              {loading && <Loading />}
              <Component {...pageProps} />
            </DefaultLayout>
          </div>
        </AnimatePresence>
      </ThemeProvider>
    </Provider>
  );
}
