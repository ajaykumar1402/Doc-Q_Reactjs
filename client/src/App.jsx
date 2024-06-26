import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Common/HeaderDashboard/Header";
import Task from "./components/DashboardPages/Task/Task";
import Dashboard from "./components/DashboardPages/Desktop14/Dashboard/Dashboard";
import Doctorprofile from "./components/LandingPages/Doctorprofile/Doctorprofile";
import Home from "./Pages/Home/Home";
import Verification from "./Pages/verification/Verification";
import Analytics from "./components/DashboardPages/Analytics/Analytics";
import Setting from "./components/DashboardPages/Setting/Settings";
import Support from "./components/DashboardPages/Support/Support";
import Schedule from "./components/DashboardPages/Schedule/Schedule";
import Sidebar from "./components/Common/SidebarDashboard/Sidebar";
import Footer from "./components/Common/Footer";
import Messages from "./components/DashboardPages/Messages/Messages";
import FindADoctor from "./components/LandingPages/Find_a_doctors_page/data/FindADoctor";
import Navbar from "./components/Common/Navbar/Navbar";
import FindDoctor from "./components/findDoctor";
import AddPatients from "./components/DashboardPages/AddPatients/AddPatients"
import PatientsList from "./components/DashboardPages/PatientsList/PatientsList";
import Services from "./components/LandingPages/Ourservices/Services";
// import SignUp from "./components/SignUpPage";
// import Login from "./Pages/Login";

function App() {
  const [isAdmin, setIsAdmin] = useState(!true);

  return (
    <>
      {!isAdmin ? (
        <>
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/find-a-doctor" element={<FindADoctor />} />
            <Route path="/our-services" element={<Services/>} />
            {/* The below one is for nav link */}
            <Route path="/find-doctor" element={<FindDoctor />} />
            <Route path="/doctors-profile" element={<Doctorprofile />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}

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
              <Route path="/patients" element={<PatientsList />} />
              <Route path="/patients-list" element={<AddPatients />} />
              <Route path="/add-patients" element={<AddPatients />} />
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
