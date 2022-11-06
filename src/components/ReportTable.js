import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ParkImage from '../asset/image/ParkImage.png';
import Pagination from 'react-bootstrap/Pagination';
import { Row, Container, Col} from 'react-bootstrap';
import '../styles/Report.css'
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
    const stars = Array(5).fill(0)
    return (
        <Card className="report">
            <Card.Header style={{backgroundColor:"white"}}>
                <Row>
                <Col>
                    สถานที่จอดรถ
                </Col>
                <Col>
                    ประเภทที่จอดรถ
                </Col>
                <Col>
                    เซ็นเซอร์
                </Col>
                <Col>
                    คะแนน
                </Col>
                <Col>
                    สถานะ
                </Col>
                <Col>
                    
                </Col>
                <Col/>
                </Row>
            </Card.Header>
            <Card.Body>
            <Row>
                <Col>
                <img src={ParkImage}></img>
                </Col>
                <Col>
                <text> ที่จอดรถสาธารณะ </text>
                </Col>
                <Col>
                <text>

                </text>
                </Col>
                <Col>
                    
                </Col>
                <Col>
                <text style={{backgroundColor:"#F4FBDB",color:"#92D966"}}>พร้อมใช้งาน</text>
                </Col>
                <Col>
                <button className="btn btn-default" style={{backgroundColor:"#FBF6DB",color:"#D9B966"}}>แก้ไข</button>
                </Col>
                <Col>
                <button className="btn btn-default" style={{backgroundColor:"#FBDBDB",color:"#D96666"}}>ลบ</button>
                </Col>
            
            </Row>
            <Row>
            <Col>
                <img src={ParkImage}></img>
            </Col>
            <Col>
                <text> ที่จอดรถสาธารณะ </text>
            </Col>
            <Col>
                <text>
                    เซ็นเซอร์ 11,12
                </text>
                </Col>
                <Col>
                    
                </Col>
                <Col>
                <text style={{backgroundColor:"#F4FBDB",color:"#92D966"}}>พร้อมใช้งาน</text>
                </Col>
                <Col>
                <button className="btn btn-default" style={{backgroundColor:"#FBF6DB",color:"#D9B966"}}>แก้ไข</button>
                </Col>
                <Col>
                <button className="btn btn-default" style={{backgroundColor:"#FBDBDB",color:"#D96666"}}>ลบ</button>
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