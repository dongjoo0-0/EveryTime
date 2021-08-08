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
  state ={
    data : this.props.data
  };

  render(){
    return(
      <div id="boards">
        <Card
          func="cardboard"
          title="자유게시판"
          router="/1"
          type="list"
          data={this.state.data[1]}
        />
        <Card
          func="cardboard"
          title="장터게시판"
          router="/2"
          type="list"
          data={this.state.data[2]}
        />
        <Card
          func="cardboard"
          title="홍보게시판"
          router="/3"
          type="list"
          data={this.state.data[3]}
        />
        <Card
          func="cardboard"
          title="비밀게시판"
          router="/4"
          type="article"
          data={this.state.data[4]}
        />
      </div>
    )
  }
}

class Right extends Component {
  render(){
    return(
      <div id="right">
        <Card 
          func="real-time-best" 
          title="실시간 인기 글"
          type="article"
        />
        <Card 
          func="hot-content"
          title="HOT 게시글"
          router="/hotcontent"
          type="list"
        />
        <Card 
          func="best-boards"
          title="BEST 게시판"
          router="/bestboards"
        />
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
      'hotcontent' : "HOT 게시글",
      'bestboards' : "BEST 게시판"
    }
    
    const title = boardtype[this.props.match.params.board];
    
    return(
      <div id="mainboards">
        <Card 
          title={title}
          type="cardboard"
        />
      </div>
    );
  }
}


class Body extends Component {
  state = {
    data : null,
  }

  getData = () => {
    axios
      .get('http://110.76.77.23:8080/')
      .then(
        returnData => {
          console.log(returnData);
          this.setState({data : returnData.data});
        }
      )
  }

  componentDidMount() {
    this.getData();
  }

  render(){
    console.log(this.state.data);
    if(this.state.data === null){
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
            component={() => <BoardList data={this.state.data} />}
          />
          <Route path="/:board" component={CardBoard}/>
          <Right />
        </div>
      );
    }
  }
}





export default Body;