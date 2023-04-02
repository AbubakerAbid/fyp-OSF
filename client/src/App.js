import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import About from "./pages/about/About";
import Home from './pages/Home ';
import FindService from './pages/find-service/FindService';
import BecomeProvider from './pages/become-provider/BecomeProvider';
import ContactUs from './pages/contact-us/ContactUs';
import ServiceWorkers from './pages/service-workers/ServiceWorkers';
import ServiceWorkersHomeTutors from './pages/service-workers/ServiceWorkersHomeTutors';
import ServiceWorkersSecurityGuards from './pages/service-workers/ServiceWorkersSecurityGuards';
import ServiceWorkersDriver from "./pages/service-workers/serviceWorkersDriver";
import ServiceWorkersCareTaker from "./pages/service-workers/ServiceWorkersCareTaker";
import ServiceWorkersCookChef from "./pages/service-workers/ServiceWorkersCookChef";
import Auth from "../src/components/sign-in/SignIn"
import Admin from './../src/pages/admin/Admin';
import Dashboard from './pages/dashboard/Dashboard';
import WorkerDetailDashboard from "./pages/dashboard/workerDetailDashboard";
import UserDetailDashboard from "./pages/dashboard/userDetailDashboard";
import ApproveWorkerDashboard from "./pages/dashboard/approveWorkers";

const App = () => (

  // <Home/>
   <BrowserRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/auth" exact element={<Auth />} />
      <Route path="/about" element={<About />} />
      <Route path="/FindService" element={<FindService />} />
      <Route path="/BecomeProvider" element={<BecomeProvider />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/ServiceWorkersMaid" element={<ServiceWorkers />} />
      <Route path="/ServiceWorkersDriver" element={<ServiceWorkersDriver />} />
      <Route path="/ServiceWorkersCareTaker" element={<ServiceWorkersCareTaker />} />
      <Route path="/ServiceWorkersSecurityGuards" element={<ServiceWorkersSecurityGuards />} />
      <Route path="/ServiceWorkersHomeTutors" element={<ServiceWorkersHomeTutors />} />
      <Route path="/ServiceWorkersCookChef" element={<ServiceWorkersCookChef />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/WorkerDetailDashboard" element={<WorkerDetailDashboard/>} />
      <Route path="/UserDetailDashboard" element={<UserDetailDashboard/>} />
      <Route path="/ApproveWorkerDashboard" element={<ApproveWorkerDashboard/>} />
      
      </Routes>
    </BrowserRouter>
    );

export default App;
