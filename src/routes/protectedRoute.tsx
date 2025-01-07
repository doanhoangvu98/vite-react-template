import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-grow overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
