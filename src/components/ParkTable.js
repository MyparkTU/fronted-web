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


function ParkTable() {
  return (
    <Card className="card-park">
      
      <Tab.Container defaultActiveKey="first">
      <Card.Header style={{backgroundColor:"white"}}>
        <Nav variant="pills">
          <Nav.Item style={{marginLeft:"2%"}}>
            <Nav.Link eventKey="first" className="tag1">ทั้งหมด</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{marginLeft:"5%"}}>
            <Nav.Link eventKey="second" className="tag2">กำลังรอดำเนินการ</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{marginLeft:"5%"}}>
            <Nav.Link eventKey="third" className="tag3">ดำเนินการเสร็จสิ้น</Nav.Link> 
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Tab.Content>
          <Tab.Pane eventKey="first">
        <Container fluid>
          <Row>
          <Col>
          <img src={ParkImage}/>
          </Col>
          <Col>
          <text className="park-name">
          ลานจอดรถวิศวะ
          </text>
          <br/>
          <text className="detail">
          11/22/2022 15:02
          <br/>
          หัวเรื่อง : เซ็นเซอร์เสีย
          <br/>
          ประเภทปัญหา : เซ็นเซอร์
          <br/>
          ข้อความ : เซ็นเซอร์เสียครับแอพบอกว่ามีที่จอดแต่ช่องจอดเต็ม
          </text>
          </Col>
          <Col xs={4}>
          <text className="status-park">สถานะ :  รอการตรวจสอบ </text> 
          </Col>
          <Col xs={4} >
            <text className="status-button">
          เปลี่ยนสถานะ
          </text>
          </Col>
          </Row>
        </Container>
        </Tab.Pane>
        <Tab.Pane eventKey="second">
        <Card.Text>
          hello
        </Card.Text>
        </Tab.Pane>
        </Tab.Content>
        <Tab.Pane eventKey="third">
          <Card.Text>
            Sawadee krub
            
            
          </Card.Text>
        </Tab.Pane>
      </Card.Body>
      </Tab.Container>
      <Card.Footer class="d-flex justify-content-center">
      <Pagination>
      <Pagination.Prev></Pagination.Prev>
      {items}
      <Pagination.Next/>
      </Pagination>
      </Card.Footer>
    </Card>
  );
}

export default ParkTable;