import SideBar from "../components/SideBar";
import Headers from "../components/header";
import '../styles/Park.css';


function ParkPage() {
    return(
        <div> 
            <h2 className="headerlabel">สถานที่จอดรถทั้งหมด</h2>
            <Headers />
            <SideBar />
        
        </div>
    );
}

export default ParkPage;