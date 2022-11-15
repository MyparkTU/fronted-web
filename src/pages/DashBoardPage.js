import SideBar from "../components/SideBar";
import Headers from "../components/header";
import '../styles/DashBoard.css';
import NewReport from'../components/NewReport';
import { Button } from "react-bootstrap";

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
  }

function DashboardPage() {
    const token = getToken();
    console.log(token)
    return(
        <div> 
            <header className="shadowheader">
            <div className="Dashboardrow">
                <SideBar />
                    <div className="Topic">
                        <h2 className="headerlabel">ภาพรวม</h2>
                        <p className="underlabel">Dashboard ภาพรวม</p>
                    </div>
                <Headers />
                <Button onClick={sessionStorage.removeItem('token')}>
                    a
                </Button>
            </div>
            </header>
        <body>
            <NewReport />
            </body> 
        </div>
        
    );
}

export default DashboardPage;