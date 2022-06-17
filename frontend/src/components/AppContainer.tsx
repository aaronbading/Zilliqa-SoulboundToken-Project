import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function AppContainer() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
