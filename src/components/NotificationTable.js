import React from 'react'
import Card from 'react-bootstrap/Card'
import Pagination from 'react-bootstrap/Pagination'
import ParkImage from '../asset/image/ParkImage.png';
import { Row, Container, Col} from 'react-bootstrap';
import '../styles/Notification.css';

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
function NotificationTable(){
    return (
       <Card className='Notitable'>
            <Card.Header style={{backgroundColor:"white",color:"#757575"}}>
                <text className="header">ทั้งหมด </text>
            </Card.Header>
            <Card.Body>
                <div style={{width:"50%",height:"50%"}}>
                <Row style={{marginTop:"2%"}}>
                    <Col md={4}>
                            <Card className="card-status1">
                            <text class="d-flex justify-content-center"  style={{fontFamily:"Promptlight"}}>
                            รอการตรวจสอบ
                            </text>
                            </Card>
                    </Col>
                    <Col md={8}>
                        <text>
                        รายงานปัญหาใหม่ 10/22/2022
                        <br/>
                        สถานที่ : ลานจอดรถคณะวิศวะ 1
                        <br/>
                        หัวเรื่อง : เซ็นเซอร์เสีย
                        <br/>
                        </text>
                    </Col>
                </Row>
                <Row style={{marginTop:"4%"}}>
                    <Col md={4}>
                        <Card className="card-status2">
                            <text class="d-flex justify-content-center" style={{fontFamily:"Promptlight" ,justifyContent:"center"}}>
                            รอการตรวจสอบ
                            </text>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <text>
                        รายงานปัญหาใหม่ 10/22/2022
                        <br/>
                        สถานที่ : ลานจอดรถคณะวิศวะ 1
                        <br/>
                        หัวเรื่อง : เซ็นเซอร์เสีย
                        <br/>
                        </text>
                    </Col>
                    <Col md={6}>
                    </Col>
                </Row>
                <Row style={{marginTop:"4%"}}>
                    
                </Row>
                </div>
                

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
export default NotificationTable;