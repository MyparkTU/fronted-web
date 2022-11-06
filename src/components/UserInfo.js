import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import image from '../asset/image/UserImage.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/UserInfo.css';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
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
        
    <img src = {image} width="40px" height="40px" style={{borderradius: "100px"}} className="userimg"/>
    <DropdownButton id="dropdown-basic-button" src={image} className="dropdown">
      <Dropdown.Item href="#/action-1">เกี่ยวกับผู้ใช้</Dropdown.Item>
      <Dropdown.Item href="#/action-2">ชื่อผู้ใช้    Admin_001</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Log out</Dropdown.Item>
    </DropdownButton>
  


      
     
      
    </div>
  );
}

export default UserInfo;