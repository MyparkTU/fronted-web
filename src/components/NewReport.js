import  React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NewReport.css'
import haveReportcar from '../asset/image/haveReportcar.png'
import noReportmoter from '../asset/image/moternoreport.png'
function Reportcomponent() {
        return(
          <div className="columreport"> 
            
            <div class="card carboxstyle " >
            <div class="card-body">
            <div className='space'>
                  <img src = {haveReportcar} width= "12.89%" height= "26.43%"  className='image' />
                  <div className='head'>
                  <p className=" havetypereport" >รายงานปัญหาใหม่</p>
                  <p className=" report" >3 รายการ</p>
                  </div>
                  </div>
            
            </div>
            </div>
            <div class="card moterboxstyle " >
            <div class="card-body">
            <div className='space'>
                  <img src = {noReportmoter} width= "12.89%" height= "26.43%"  className='image' />
                  <div className='head'>
                  <p className=" nohavetypereport" >รายงานปัญหาใหม่</p>
                  <p className=" report" >0 รายการ</p>
                  </div>
                  </div>
            

            
            </div>
          </div>

          <div class="card moterboxstyle " >
            <div class="card-body">
            <div className='space'>
                  <img src = {noReportmoter} width= "12.89%" height= "26.43%"  className='image' />
                  <div className='head'>
                  <p className=" nohavetypereport" >รายงานปัญหาใหม่</p>
                  <p className=" report" >0 รายการ</p>
                  </div>
                  </div>
            

            
            </div>
          </div>

          <div class="card moterboxstyle " >
            <div class="card-body">
            <div className='space'>
                  <img src = {noReportmoter} width= "12.89%" height= "26.43%"  className='image' />
                  <div className='head'>
                  <p className=" nohavetypereport" >รายงานปัญหาใหม่</p>
                  <p className=" report" >0 รายการ</p>
                  </div>
                  </div>
            

            
            </div>
          </div>
          </div>
        )
    

}

export default Reportcomponent;
