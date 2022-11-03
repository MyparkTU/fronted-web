import  React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NewReport.css'
import haveReportcar from '../asset/image/haveReportcar.png'
class Reportcomponent extends Component {
    render() {
        return(
            <div class="card boxstyle" >
            <div class="card-body">
            <div className='space'>
                  <img src = {haveReportcar} width= "40px" height= "33px"  className='image' />
                  <div className='head'>
                  <p className=" typereport" >รายงานปัญหาใหม่</p>
                  <p className=" report" >3 รายการ</p>
                  </div>
                  </div>
              
            </div>
          </div>
        )
    

}
}
export default Reportcomponent;
