import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <h1>hola</h1>
      <Outlet />
    </div>
  );
}
export default Layout;
