import  React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';
import Users from './UserInfo';
import '../styles/header.css'
class headers extends Component {
    render() {
        return (
            <div className="spaces">
            <Search />
            <Users />
            </div>
        )}
}
export default headers;
