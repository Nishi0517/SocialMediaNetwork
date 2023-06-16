import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminDashboard = () => {
  const history = useHistory();

  return (
    <>
      <AdminHeader />
      <h1>Welcome to the admin dashboard page</h1>
    </>
  );
};

export default AdminDashboard;
