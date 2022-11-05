import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/SideBar.css'
import car from '../asset/image/car.png';
import dashboard from '../asset/image/Dashboard.png';
import Notification from '../asset/image/Notiicon.png';
import report from '../asset/image/report.png';
import Sidebarlogo from '../asset/image/Sidebarlogo.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoginPage from '../pages/LoginPage';

function SideBar() {
    return(
        <Router>
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-auto min-vh-100 colors'>
                    <ul>
                        <img src = {Sidebarlogo} width= "129px" height= "39px"   /> 
                        <br />
                        <br />
                        <br />
                         <il >   
                            <a className='nav-link px-2'><Link to="/login">
                                <img src = {dashboard} width= "24px" height= "24px"   /> 
                                <i className='bi-house'/> <span className='ms-1 d-none d-sm-inline label '> Dashboard</span></Link>
                            </a>
                        </il>
                        <br />
                        <p className='headlabel'>MANAGEMENT</p>
                        
                        
                        <il >   
                            <a className='nav-link px-2'>
                                <img src = {car} width= "24px" height= "24px"   /> 
                                <i className='bi-house'/> <span className='ms-1 d-none d-sm-inline label '>สถานที่จอดรถ</span>
                            </a>
                        </il>
                        <br />
                        <p className='headlabel'>INFORMATION</p>
                        
                        <il >   
                            <a className='nav-link px-2'>
                                <img src = {report} width= "24px" height= "24px"   /> 
                                <i className='bi-house'/> <span className='ms-1 d-none d-sm-inline label '>รายงานปัญหา</span>
                            </a>
                        </il>
                        <br />
                    
                        <il >   
                            <a className='nav-link px-2'>
                                <img src = {Notification} width= "24px" height= "24px"   /> 
                                <i className='bi-house'/> <span className='ms-1 d-none d-sm-inline label '>การแจ้งเตือน</span>
                            </a>
                        </il>
                    </ul>


                </div>
            </div>

        </div>
        
        </Router>
    );

}

export default SideBar;