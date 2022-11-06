
import LoginPage from './pages/LoginPage';
import SideBar from './components/SideBar';
import Dashboard from './pages/DashBoardPage';
import NotificationPage from './pages/NotificationPage';
import ParkPage from './pages/ParkPage';
import Reportpage from './pages/ReportPage';
import Search from './components/Search';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/Login" element={<LoginPage />}/>
        <Route path="/Dashboard" element={<Dashboard />}/>
        <Route path="/Notifiaction" element={<NotificationPage />}/>
        <Route path="/Park" element={<ParkPage />}/>
        <Route path="/Report" element={<Reportpage />}/>
        <Route path="/Notification" element={<NotificationPage />}/>




        
        
      </Routes>
    </Router>
  );
}

export default App;
