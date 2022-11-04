import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import image from '../asset/image/UserImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/UserInfo.css';
import {TbPencil} from 'react-icons/tb';

function UserInfo() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);

  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };

  return (
    <div ref={ref}>
        <p>ปี๊ด บ้านปูน</p>
      <button class="btn btn-default" onClick={handleClick}><img src = {image}/></button>
     
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
        
      >
        <Popover id="popover-contained">
          <Popover.Body className='body'>
            <text className='title'>เกี่ยวกับผู้ใช้</text>
            <br/>
            ชื่อผู้ใช้ Admin_001 <TbPencil/>  
            <br/>
            เปลี่ยนรูปโปรไฟล์
            <br/>
            เปลี่ยนรหัสผ่าน
            <br/>
            <button className="btn btn-default " 
            style={{background: "#BB6BD9"}}>
            Log out</button>
          </Popover.Body>
        </Popover>
      </Overlay>
    </div>
  );
}

export default UserInfo;