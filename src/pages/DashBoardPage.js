import SideBar from "../components/SideBar";
import Headers from "../components/header";
import '../styles/DashBoard.css';
import NewReport from'../components/NewReport';

function DashboardPage() {
    return(
        <div> 
            <header className="shadowheader">
            <div className="Dashboardrow">
                <SideBar />
                    <div className="Topic">
                        <h2 className="headerlabel">ภาพรวม</h2>
                        <p className="underlabel">Dashboard > ภาพรวม</p>
                    </div>
                <Headers />
            </div>
            </header>
            <NewReport />
        </div>
        
    );
}

export default DashboardPage;