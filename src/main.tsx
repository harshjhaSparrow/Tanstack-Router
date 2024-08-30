import { ChakraProvider } from "@chakra-ui/react";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { extendTheme } from "@chakra-ui/react";
import { routeTree } from "./routeTree.gen";
import { Provider } from "react-redux";
import { persistor, store } from "./miscellaneous/redux/store";
import { PersistGate } from "redux-persist/integration/react";
const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ChakraProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <RouterProvider router={router} />
          </PersistGate>
        </Provider>
      </ChakraProvider>
    </StrictMode>
  );
}
