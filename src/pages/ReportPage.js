import SideBar from "../components/SideBar";
import Headers from "../components/header";

import '../styles/ReportPage.css'

function ReportPage() {
    return(
        <div> 
            
            <header>
            <div className="reportrow">
                <SideBar />
                    <div className="Topic">
                        <h2 className="headerlabelreport">รายงานปัญหาทั้งหมด</h2>
                        <p className="underlabelreport">Information > รายงานปัญหา</p>
                    </div>
                <Headers />
            </div>
            </header>
        </div>
    );
}

export default ReportPage;