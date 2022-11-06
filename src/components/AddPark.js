import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {HiPlus} from 'react-icons/hi';
import '../styles/AddPark.css';
import {Row,Col,Container, Form} from 'react-bootstrap';
import ParkImage from '../asset/image/ParkImage.png';
import logo from '../asset/image/logoMypark.png';

function AddPark() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="add-button" onClick={handleShow}>
        <HiPlus style={{marginLeft:"5px"}}></HiPlus> เพิ่มสถานที่จอดรถ
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
            <div style={{   height:"30%"}}>

            
                <Row>
                    <Col md={6}>
                    <img src = {ParkImage}></img>
                    </Col>
                    <Col md={6}>
                    <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    
                    <Form.Control placeholder="ชื่อสถานที่จอด" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>
                                    <text className="park-spot">
                                        ช่องจอด
                                    </text></Form.Label>
                                    <Form.Control placeholder="00" />
                            </Form.Group> 
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>
                                <text className="park-spot">
                                        เซ็นเซอร์ตัวที่
                                    </text></Form.Label>
                                    <Form.Control placeholder="[0-1]" />
                            </Form.Group> 
                        </Col>
                    </Row>
                    
                    
                    
                    
                    </Form>
                    </Col>
                </Row>
                <Row>
                    <Row>
                        <Col>
                        <text className="latitude">Latitude</text>
                        </Col>
                        <Col style={{marginLeft:"4.5%"}}>
                        <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                                <Form.Control placeholder="00.00000" />
                                </Form.Group>
                            </Form>
                        </Col>
                        
                    </Row>
                    <Row>
                    <Col>
                        <text className="longitude">Longitude</text>
                        </Col>
                        <Col style={{marginLeft:"4.5%"}}>
                        <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                                <Form.Control placeholder="00.00000" />
                                </Form.Group>
                            </Form>
                        </Col>
                        
                    </Row>
                    <Row>
                        <Col>
                        <text className="form-status">สถานะ</text>
                        </Col>
                        <Col style={{marginLeft:"4.5%"}}>
                        <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            
                                <Form.Control placeholder="เปิดให้บริการปกติ" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Row>
                
                
                
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button className="save" onClick={handleClose}>
            บันทึก
          </Button>
          <Button className="btn btn-danger">ล้าง</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddPark;