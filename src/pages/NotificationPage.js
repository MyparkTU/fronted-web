import SideBar from "../components/SideBar";
import Headers from "../components/header";
import '../styles/Notification.css';
import Notitable from "../components/NotificationTable";


function Notification() {
    return(
        <div>
        <header className="shadowheader">
        <div>     
            <div className="Notirow">
                <SideBar />
                    <div className="Topic">
                        <h2 className="headerlabelNoti">การแจ้งเตือนทั้งหมด</h2>
                        <p className="underlabelNoti">Information > การแจ้งเตือน</p>
                    </div>
                <Headers  />
            </div>
            
        </div>
        </header>
        <body>
            <Notitable />
        </body>
        </div>
    );
}

export default Notification;