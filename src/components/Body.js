import React, { Component } from 'react';
import './Body.css'
import profile from '../default-user-icon-13.jpg';

class Left extends Component {
  render(){
    return(
      <div id="left">
        Left Side
        <div id="my-card">
          <img src={profile} alt="profile" />
          <p className="nickname">동또선</p>
          <p className="name">김동주</p>
          <p className="name">wnehdrla</p>
          <ul className="buttons">
            <li><a href="/my">내 정보</a></li>
            <li><a href="/logout">로그아웃</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

class BoardList extends Component {
  render(){
    return(
      <div id="boards">
        BoardList
      </div>
    )
  }
}

class Right extends Component {
  render(){
    return(
      <div id="right">
        Right Side
      </div>
    );
  }
}

class Body extends Component {
  render(){
    return (
      <div id="wrapper">
        <Left />
        <BoardList />
        <Right />
      </div>
    );
  }
}

export default Body;