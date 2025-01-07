import Toast from "@/components/toast";
import HomePage from "@/pages/home";
import NotFoundPage from "@/pages/not-found";
import { ErrorBoundary } from "react-error-boundary";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";

const AppRouter = () => {
  const fallbackRender = ({ error }: any) => {
    return (
      <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
        <div className="rounded-xl bg-white p-8 text-center shadow-xl">
          <h1 className="mb-4 text-4xl font-700">Something went wrong!</h1>
          <pre className="text-gray-600">{error.message}</pre>
        </div>
      </div>
    );
  };

  return (
    <>
      <Toast />
      <ErrorBoundary fallbackRender={fallbackRender} onReset={() => {}}>
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="" element={<HomePage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </ErrorBoundary>
    </>
  );
};

export default AppRouter;
