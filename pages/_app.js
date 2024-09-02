import "@/styles/globals.css";
import DefaultLayout from "../components/layout/DefaultLayout";
import { AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import store from "../store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AnimatePresence>
        <div className=" bg-secondary-light dark:bg-primary-dark transition duration-300 font-inter">
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        </div>
      </AnimatePresence>
    </Provider>
  );
}
