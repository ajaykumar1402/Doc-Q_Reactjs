import { Route, Routes, useNavigate } from "react-router-dom";

import Messages from "pages/Dashboard/Messages/Messages";
import { useEffect } from "react";

const DashboardRoutes = () => {


  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard/messages");
  }, [navigate]);

  return (
    <div className="main-fit">
      <Routes>
      <Route path="/dashboard/messages" element={<Messages />} />
      </Routes>
    </div>
  );
};

export default DashboardRoutes;
