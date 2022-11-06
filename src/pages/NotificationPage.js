import SideBar from "../components/SideBar";
import Headers from "../components/header";
import '../styles/Notification.css';


function Notification() {
    return(
        <div> 
            <h2 className="headerlabel">การแจ้งเตือนทั้งหมด</h2>
            <Headers />
            <SideBar />

            
        </div>
    );
}

export default Notification;