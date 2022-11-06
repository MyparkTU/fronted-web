import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosSearch } from "react-icons/io";
import '../styles/Search.css';

function Search() {
   return (
      

      <div class="form-group has-search  searchs" style={{marginTop: "5%"}}>
      <span class="form-control-feedback"><IoIosSearch></IoIosSearch></span>
      <input type="text" class="form-control" placeholder="Search"></input>
    </div>
   )  
}
  
  
  export default Search;