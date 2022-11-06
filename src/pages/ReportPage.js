import SideBar from "../components/SideBar";
import Headers from "../components/header";
import TableReport from '../components/ReportTable'
import '../styles/ReportPage.css'

function ReportPage() {
    return(
        <div> 
            
            <header className="shadowheader">
            <div className="reportrow">
                <SideBar />
                    <div className="Topic">
                        <h2 className="headerlabelreport">รายงานปัญหาทั้งหมด</h2>
                        <p className="underlabelreport">Information > รายงานปัญหา</p>
                    </div>
                <Headers />
            </div>
            </header>
            <body>
             <TableReport />
            </body>
        </div>
    );
}

export default ReportPage;