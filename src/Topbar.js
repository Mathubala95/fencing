import React from 'react'
import vf from './img/vg.jpeg'


function Topbar() {
  return (
    <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"><div href="index.html"><img alt="" src={vf} /><span>.</span></div></h1>
       <div href="index.html" class="logo me-auto"></div>
        <img src="public/img/logo.png" alt=""/>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">VG Fence</a></li>
          <li><a class="nav-link scrollto" href="#about">VG Tech</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto " href="#portfolio">Products</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a class="nav-link scrollto" href="#team">Team</a></li>
        
          {/* <li class="dropdown"><a href="#"><span>Drop Down</span> <i class="bi bi-chevron-down"></i></a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="dropdown"><a href="#"><span>Deep Drop Down</span> <i class="bi bi-chevron-right"></i></a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li> */}
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div href="#about" class="get-started-btn scrollto">Get Started</div>
    </div>
  </header>
  )
}

export default Topbar