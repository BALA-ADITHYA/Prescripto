import React, { useContext } from 'react'
import Login from './Pages/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AdminContext } from './context/AdminContext';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
import { Route, Routes } from 'react-router-dom';
import DashBoard from './Pages/Admin/DashBoard';
import AllAppointment from './Pages/Admin/AllAppointment';
import AddDoctor from './Pages/Admin/AddDoctor';
import DoctorsList from './Pages/Admin/DoctorsList';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashboard from './Pages/Doctor/DoctorDashboard';
import DoctorProfile from './Pages/Doctor/DoctorProfile';
import DoctorAppointment from './Pages/Doctor/DoctorAppointment';

const App = () => {

  const {aToken} = useContext(AdminContext)
  const {dToken} = useContext(DoctorContext)

  return aToken || dToken ?
   (
    <div className=' bg-[#f8f9fd]'>
     <ToastContainer />
     <NavBar/> 
     <div className=' flex items-start'>
      <SideBar />
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/admin-dashboard' element={<DashBoard />} />
        <Route path='/all-appointments' element={<AllAppointment />} />
        <Route path='/add-doctor' element={<AddDoctor />} />
        <Route path='/doctor-list' element={<DoctorsList />} />

        {/* Doctor Route */}

        <Route path='/doctor-dashboard' element={<DoctorDashboard />} />
        <Route path='/doctor-appointments' element={<DoctorAppointment />} />
        <Route path='/doctor-profile' element={<DoctorProfile />} />
      </Routes>

     </div>
    </div>
  ):(
    <>
      <Login />
      <ToastContainer />
    </>
    )
}

export default App
