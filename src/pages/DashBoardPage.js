import SideBar from "../components/SideBar";
import Headers from "../components/header";
import '../styles/DashBoard.css';
import NewReport from'../components/NewReport';

function DashboardPage() {
    return(
        <div> 
            <h2 className="headerlabel">ภาพรวม</h2>
            <Headers />
            <SideBar />
            <NewReport />
        </div>
    );
}

export default DashboardPage;