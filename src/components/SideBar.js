import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SideBar.css'
import car from '../asset/image/car.png';
import dashboard from '../asset/image/Dashboard.png';
import Notification from '../asset/image/Notiicon.png';
import report from '../asset/image/report.png';
import Sidebarlogo from '../asset/image/Sidebarlogo.png'
import menu from '../asset/image/menu.svg'
import { Sidebar, Menu, MenuItem,useProSidebar } from 'react-pro-sidebar';
import {Link,Router} from 'react-router-dom';
function SideBar() {

  const { toggleSidebar } = useProSidebar();
    
  
    return(
   
        <div style={{ display: 'flex', height: '100%' }}>
        <Sidebar backgroundColor='#1A324A'  customBreakPoint="always">
           
                <Menu>
               

                        <img src = {Sidebarlogo} width= "129px" height= "39px"  className='logomypark' /> 

                            <MenuItem className='label menudashboard'  href='/Dashboard' ><img src = {dashboard} width= "24px" height= "24px" className='imagelogo'   />  Dashboard</MenuItem>
                        <p className='headlabel notbutton'>MANAGEMENT</p> 
                            <MenuItem className='label menupark'  href='/Park'>
                                <img src = {car} width= "24px" height= "24px"  className='imagelogo' /> 
                             สถานที่จอดรถ
                         </MenuItem>
                        <p className='headlabel notbutton'>INFORMATION</p>
                            <MenuItem className='label menupark'  href='/Report'>
                                <img src = {report} width= "24px" height= "24px" className='imagelogo'  /> 
                               รายงานปัญหา
                    </MenuItem >
                        <MenuItem className='label menunoti'  href='/Notification'>
                                <img src = {Notification} width= "24px" height= "24px"  className='imagelogo'  /> 
                               การแจ้งเตือน
                    </MenuItem>
                   



</Menu>
            
        </Sidebar>
        <main style={{ display: 'flex', padding: 10 }}>
        <div>
            
          <button type="button"  class="btn btn-secondary btns" onClick={() => toggleSidebar() } ><img src={menu}  />
          
          </button>
        </div>
      </main>
    </div>


    );

}

export default SideBar;