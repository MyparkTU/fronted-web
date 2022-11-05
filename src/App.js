import logos from './logo.svg';
import './App.css';
import LoginPage from './pages/LoginPage';
import SideBar from './components/SideBar';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App"> 

      
      <Routes><SideBar/>
      <Route path="/" element={<SideBar />} />
      <Route path="/login" element={<LoginPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
