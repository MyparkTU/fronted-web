import '../styles/login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  React, { Component } from "react";
import logoimage from '../asset/image/logoMypark.png'
class LoginPage extends Component {
    render() {
        return (
            <div className="Auth-form-container">
              
              <form className="Auth-form">
                <div className="Auth-form-content" style={{borderradius: "8px"}}>
                  <div className='space'>
                  <img src = {logoimage} width= "40px" height= "41px"  className='image' />
                  <div className='head'>
                  <p className=" fonthead" >Direct Admin</p>
                  <p className=" underhead" >Web Control Panel</p>
                  </div>
                  </div>

                  <div className="form-group mt-3  ">             
                    <label  >อีเมลของคุณ</label>
                    <input
                      type="email"
                      className="form-control mt-1 fontlabel"
                      placeholder="admin@example.com"
                      style={{background: "#F0F0F0" , width: "100%" , height:"56px" }}
                    />
                  </div>
                  <div className="form-group mt-3">
                    <label >รหัสผ่านของคุณ</label>
                    <input
                      type="password"
                      className="form-control mt-1 fontlabel"
                      placeholder="Enter password"
                      style={{background: "#F0F0F0" , width: "100%" , height:"56px"}}
                    />
                  </div>
                  <div className="d-grid gap-2 mt-3 fontlabel">
                    <button type="submit" className="btn btn-primary " style={{background: "#1A324A" , width: "100%" , height:"56px"}}>
                      เข้าสู่ระบบ
                    </button>
                  </div>

                </div>
              </form>
            </div>
          )
    }
    
}
export default LoginPage;