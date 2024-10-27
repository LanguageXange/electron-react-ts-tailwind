import { Navigate, Outlet } from "react-router-dom";
export function AuthOutlet() {
  const hasToken = localStorage.getItem("token");

  if (!hasToken) {
    return <Navigate to="/" replace />;
  }
  return hasToken ? (
    <Outlet />
  ) : (
    <div className="fixed inset-0">Loading...</div>
  );
}
