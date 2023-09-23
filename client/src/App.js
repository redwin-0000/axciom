import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
// Auth File Path
import AdminSign_Up from './Components/Auth/AdminSignUp';
import UserSign_Up from './Components/Auth/UserSign_Up';
import VendorSign_Up from './Components/Auth/VendorSign_Up';
import AdminLogin from './Components/Auth/AdminLogin';
import UserLogin from './Components/Auth/UserLogin';
import VendorLogin from './Components/Auth/VendorLogin';
// Pages File Path
import VendorPage from './Components/Pages/Vendor/VendorPage';
import UserPage from './Components/Pages/User/UserPortal';
import AdminPage from './Components/Pages/Admin/AdminPage';
import Vendor from "./Components/Pages/Vendor/Vendor"
import Vendor_Product from './Components/Pages/Vendor/Vendor_Product';
import Transection from './Components/Pages/Vendor/Transection';
import AddNewItems from './Components/Pages/Vendor/AddNewItems';
import UserPortal from './Components/Pages/User/UserPortal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/AdminSign_Up" element={<AdminSign_Up/>} />
        <Route path="/UserSign_Up" element={<UserSign_Up/>} />
        <Route path="/VendorSign_Up" element={<VendorSign_Up/>} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/UserLogin" element={<UserLogin />} />
        <Route path="/VendorLogin" element={<VendorLogin />} />
        {/* Vendor Page file path */}
        <Route path="/VendorPage" element={<VendorPage />} />
        <Route path="/UserPage" element={<UserPage />} />
        <Route path="/AdminPage" element={<AdminPage />} />
        <Route path="/Vendor" element={<Vendor />} />
        <Route path="/Vendor_Product" element={<Vendor_Product />} />
        <Route path="/Transection" element={<Transection />} />
        <Route path="/AddNewItems" element={<AddNewItems />} />
        <Route path="/UserPortal" element={<UserPortal />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
