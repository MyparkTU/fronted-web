import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import image from '../asset/image/UserImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/UserInfo.css';
import {TbPencil} from 'react-icons/tb';
import { Card } from 'react-bootstrap';

function UserInfo() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref} className = "spacess">
        <p className='username' >ปี๊ด บ้านปูน</p>
      <button class="btn btn-default" onClick={handleClick}><img src = {image}/></button>
     
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
        
      >
          <Card className='size'>
          <Popover.Body className='body'>
            <text className='title'>เกี่ยวกับผู้ใช้</text>
            <br/>
            <text className='label'>ชื่อผู้ใช้    Admin_001 </text><TbPencil/>  
            <br/><text className='label'>
            เปลี่ยนรูปโปรไฟล์</text>
            <br/><text className='label'>
            เปลี่ยนรหัสผ่าน</text>
            <br/>
            <button className="btn btn-default colorbutton" 
            >
            <h5 style={{color: "#FFFFFF"}}>Log out</h5></button>
          </Popover.Body>
      </Card>
      </Overlay>
    </div>
  );
}

export default UserInfo;