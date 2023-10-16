/* eslint-disable no-unused-vars */
import { Outlet, useSearchParams } from "react-router-dom";

import UserDashboardSideBar from "../ui/UserDashboardSideBar";

function UserDashboard() {
  return (
    <div className="flex  h-[100vh]">
      <UserDashboardSideBar />
      <Outlet />
      {/* this outlet will render the children routes of the UseDashBoard-component // go to the App.jsx file for more ditalis */}
    </div>
  );
}

export default UserDashboard;
