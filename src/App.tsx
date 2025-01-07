/// <reference types="redux-persist/types" />
import AppRouter from "@/routes/index";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0
    }
  }
});

const router = createBrowserRouter([{ path: "*", Component: AppRouter }]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router}></RouterProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default App;
