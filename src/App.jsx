import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Common/HeaderDashboard/Header";
import Task from "./components/DashboardPages/Task/Task";
import Dashboard from "./components/DashboardPages/Desktop14/Dashboard/Dashboard";
import Doctorprofile from "./components/LandingPages/Doctorprofile/Doctorprofile";
import Home from "./Pages/Home/Home";
import Analytics from "./components/DashboardPages/Analytics/Analytics";
import Setting from "./components/DashboardPages/Setting/Settings";
import Support from "./components/DashboardPages/Support/Support";
import Schedule from "./components/DashboardPages/Schedule/Schedule";
import Sidebar from "./components/Common/SidebarDashboard/Sidebar";
import Footer from "./components/Common/Footer";
import Messages from "./components/DashboardPages/Messages/Messages";
import Patients from "./components/DashboardPages/Patients/Patients";
import FindADoctor from "./components/LandingPages/Find_a_doctors_page/data/FindADoctor";
import Navbar from "./components/Common/Navbar/Navbar";
import Services from "./components/LandingPages/Services/Services";
import FindDoctor from "./components/findDoctor";

function App() {
  const [isAdmin, setIsAdmin] = useState(true);

  return (
    <>
      {!isAdmin ? (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />

            <Route path="/find-a-doctor" element={<FindADoctor />} />

            <Route path="/our-services" element={<h1>Service page Here</h1>} />
            {/* The below one is for nav link */}
            <Route path="/find-doctor" element={<FindDoctor />} />
            <Route path="/doctors-profile" element={<Doctorprofile />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <>
          {/* <AdminDashboard/> */}
          <Header />
          <div className="flex justify-end">
            <Sidebar />
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/tasks" element={<Task />} />
              {/* <Route path="/patients" element={<PatientsList />} /> */}
              {/* <Route path="/add-patients" element={<AddPatients />} /> */}
              <Route path="/messages" element={<Messages />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Setting />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
