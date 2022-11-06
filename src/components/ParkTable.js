import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ParkImage from '../asset/image/ParkImage.png';
import Pagination from 'react-bootstrap/Pagination';
import { Row, Container, Col} from 'react-bootstrap';
import '../styles/reportTable.css'
const changeActive= (props) => {
  active =  props
  console.log(active)
}

let active = 1;
let items = [];
for (let number = 1; number <= 5; number++) {
items.push(
  <Pagination.Item key={number} active={number === active} onClick={() => changeActive(number)}>
    {number} 
  </Pagination.Item>
);
}



function ReportTable() {
    return (
        <Card className="report-table">
            <Card.Header style={{backgroundColor:"white"}}>
                <Row>
                <Col>
                    <text className="park-place">สถานที่จอดรถ</text>
                </Col>
                <Col xl={2}>
                    <text className="park-type">ประเภทที่จอดรถ</text>
                </Col>
                <Col>
                    <text className="park-sensor">เซ็นเซอร์</text>
                </Col>
                <Col>
                    <text className="park-score">คะแนน</text>
                </Col>
                <Col>
                    <text className="park-status">สถานะ</text>
                </Col>
                <Col>
                    
                </Col>
                <Col/>
                </Row>
            </Card.Header>
            <Card.Body>
            <Row>
                <Col>
                <img src={ParkImage} width="85%"></img>
                </Col>
                <Col>
                <text className="type-park"> ที่จอดรถสาธารณะ </text>
                </Col>
                <Col>
                <text>

                </text>
                </Col>
                <Col>
                    
                </Col>
                <Col>
                <text className="text-status">พร้อมใช้งาน</text>
                </Col>
                <Col>
                <button className="btn btn-default1" id="status-button"style={{backgroundColor:"#FBF6DB",color:"#D9B966"}}>แก้ไข</button>
                </Col>
                <Col>
                <button className="btn btn-default2" style={{backgroundColor:"#FBDBDB",color:"#D96666"}}>ลบ</button>
                </Col>
            
            </Row>
            <Row>
            <Col>
                <img src={ParkImage} width="85%"></img>
            </Col>
            <Col>
                <text className="type-park"> ที่จอดรถสาธารณะ </text>
            </Col>
            <Col>
                <text className='type-park'>
                    เซ็นเซอร์ 11,12
                </text>
                </Col>
                <Col>
                    
                </Col>
                <Col>
                <text style={{backgroundColor:"#F4FBDB",color:"#92D966"}}>พร้อมใช้งาน</text>
                </Col>
                <Col>
                <button className="btn btn-default1" >แก้ไข</button>
                </Col>
                <Col>
                <button className="btn btn-default2">ลบ</button>
                </Col>
            </Row>
            </Card.Body>
            <Card.Footer class="d-flex justify-content-center">
            <Pagination>
            <Pagination.Prev></Pagination.Prev>
            {items}
            <Pagination.Next/>
            </Pagination>
            </Card.Footer>    
        </Card>
    )
}

export default ReportTable;