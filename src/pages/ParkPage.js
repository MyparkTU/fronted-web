import SideBar from "../components/SideBar";
import Headers from "../components/header";
import '../styles/Park.css';
import Tablepark from '../components/ParkTable';


function ParkPage() {
    return(
        <div> 
            <header className="shadowheader" >
            <div className="Dashboardrow">
                <SideBar />
                    <div className="TopicParkpage">
                        <h2 className="headerlabelparkpage">สถานที่จอดรถทั้งหมด</h2>
                        <p className="underlabelparkpage">Management > สถานที่จอดรถทั้งหมด</p>
                    </div>
                <Headers />
                
            </div>
           </header>
           <body>
                    <Tablepark />
                </body>
        </div>
    );
}

export default ParkPage;