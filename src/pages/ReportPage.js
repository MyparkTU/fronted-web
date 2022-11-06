import SideBar from "../components/SideBar";
import Headers from "../components/header";


function ReportPage() {
    return(
        <div> 
            <h2 className="headerlabel">รายงานปัญหาทั้งหมด</h2>
            <Headers />
            <SideBar />
        </div>
    );
}

export default ReportPage;