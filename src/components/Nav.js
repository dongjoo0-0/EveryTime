import React, { Component } from 'react';
import logo from '../eevee.svg';
import './Nav.css'

class TopNav extends Component {
  render(){
    return (
      <nav>
        <div className="container">
          <div id="logo">
            <a href="/"><img src={logo} alt="logo" /></a>
            <p>
              <span id="service-name">이브이타임</span>
              <span id="campus-name">KAIST</span>
            </p>
          </div>
          <div id="my-menu">
            <button>&#128231;</button>
            <button>&#128118;</button>
          </div>
          <ul id="nav-list">
            <li className="active"><a href="/">게시판</a></li>
            <li><a href="/timetable">시간표</a></li>
            <li><a href="/calculater">학점계산기</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

class SubMenu extends Component {
  render(){
    return(
      <div id="submenu">
        <ul id="board-list">
          <li><a href="/1">자유게시판</a></li>
          <li><a href="/2">장터게시판</a></li>
          <li><a href="/3">홍보게시판</a></li>
          <li><a href="/4">비밀게시판</a></li>
        </ul>
      </div>
    );
  }
}

class Nav extends Component {
  render(){
    return(
      <div>
        <TopNav />
        <SubMenu />
      </div>
    );
  }
}

export default Nav;