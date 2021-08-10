import React, { Component } from 'react';
import './Body.css';
import profile from '../default-user-icon-13.jpg';
import Card from './Card';
import { Route } from 'react-router-dom';

const axios = require('axios');

class Left extends Component {
  render(){
    return(
      <div id="left">
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
    const boards = [
      {link :"/1", title: "자유게시판", length: 4, type: "list", key: 1},
      {link :"/2", title: "장터게시판", length: 4, type: "list", key: 2},
      {link :"/3", title: "홍보게시판", length: 4, type: "list", key: 3},
      {link :"/4", title: "비밀게시판", length: 2, type: "article", key: 4}
    ];
    return(
      <div id="boards">
        {boards.map(board => {return <Card {...board}/>})}
      </div>
    )
  }
}

class Right extends Component {
  render(){
    const boards = [
      {link :"/101", title: "실시간 인기 글", length: 2, type: "article", key: 1},
      {link :"/102", title: "HOT 게시글", length: 2, plus: true, type: "list", key: 2},
      {link :"/103", title: "BEST 게시판", plus: true, key: 3}
    ];
    return(
      <div id="right">
        {boards.map(board => {return <Card {...board} />})}
      </div>
    );
  }
}


class CardBoard extends Component {
  render(){
    const boardtype = {
      '1' : "자유게시판",
      '2' : "장터게시판",
      '3' : "홍보게시판",
      '4' : "비밀게시판",
      '102' : "HOT 게시글",
      '103' : "BEST 게시판"
    }
    
    const title = boardtype[this.props.match.params.board];
    
    return(
      <div id="mainboards">
        <Card 
          title={title}
          length={10}
          type="article"
        />
      </div>
    );
  }
}


class Body extends Component {
  state = {
    data : null,
  }

  render(){
    console.log(this.state.data);
    //if(this.state.data === null){
    if(this.state.data !== null){
      // Render loading state ...
      return (
        <div id="wrapper">
          <Route exact path="/" component={Left}/>
          <Right />
        </div>
      );
    } else {
      return(
        <div id="wrapper">
          <Route exact path="/" component={Left}/>
          <Route exact path="/" 
            component={() => <BoardList/>}
          />
          <Route path="/:board" component={CardBoard}/>
          <Right />
        </div>
      );
    }
  }
}





export default Body;