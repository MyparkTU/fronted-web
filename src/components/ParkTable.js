import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import ParkImage from '../asset/image/ParkImage.png';
import Pagination from 'react-bootstrap/Pagination';
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
    <Card>
      <Tab.Container defaultActiveKey="first">
      <Card.Header>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link eventKey="first">ทั้งหมด</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="second">กำลังรอดำเนินการ</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="third">ดำเนินการเสร็จสิ้น</Nav.Link> 
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Tab.Content>
          <Tab.Pane eventKey="first">
        <Card.Text>
          <img src={ParkImage}/>
          ลานจอดรถวิศวะ
          <br/>
          11/22/2022 15:02
          <br/>
          หัวเรื่อง : เซ็นเซอร์เสีย
          <br/>
          ประเภทปัญหา : เซ็นเซอร์
          <br/>
          ข้อความ : เซ็นเซอร์เสียครับแอพบอกว่ามีที่จอดแต่ช่องจอดเต็ม
        </Card.Text>
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
      <Card.Footer>
      <Pagination>{items}</Pagination>
      </Card.Footer>
    </Card>
  );
}

export default ParkTable;