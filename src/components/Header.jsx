import React from "react";
import ReactDom from "react-dom";

function Header(){
    return(
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg class="bi me-2" width="40" height="32"></svg>
          <span class="fs-4">Infotech</span>
        </a>
  
        <ul class="nav nav-pills">
          <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
          <li class="nav-item"><a href="signup.html" class="nav-link">SignUP</a></li>
          <li class="nav-item"><a href="Login.html" class="nav-link">Login</a></li>
          <li class="nav-item"><a href="contact.html" class="nav-link">contact</a></li>
        </ul>
      </header>)
}
export default Header;