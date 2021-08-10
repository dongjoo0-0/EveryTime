import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const axios = require('axios');

class CardArticle extends Component {
  render(){
    const boxes = [];
    if(this.props.type === "list"){boxes.push(<time>{this.props.time}</time>);}
    boxes.push(<p id="title">{this.props.title}</p>);
    
    boxes.push(<p id="small">{this.props.small}</p>);
    
    boxes.push(<span>{this.props.boardtype}</span>);
    if(this.props.type === "article"){boxes.push(<time>{this.props.time}</time>);}
    
    if(this.props.voteCnt && this.props.commentCnt){
      boxes.push(
        <ul>
          <li className="vote">&#128077; {this.props.voteCnt}</li>
          <li className="comment">&#128172; {this.props.commentCnt}</li>
        </ul>
      );
    }
    
    return(<Link className={this.props.type} id={this.props.link} to={this.props.link}>{boxes}</Link>);
  }
}


class Card extends Component {
  state = {
    data: {
      title:"허걱",
      small:"ㅈㄱㄴ",
      time:"방금",
      //boardtype: "자유게시판",
      voteCnt:"10",
      commentCnt:"3",
      link:"/1/1",
      type: this.props.type
    }

    /*data : {
      title: "호고곡",
      time: "방금",
      link: "/1/1",
      type: this.props.type
    }*/
    
  }

  //props: {title, style, length, plus : boolean, link, type}
  // {'자유게시판' , 'list', 4, '/1', 'article'}

  getData = () => {
    axios
      .get(this.props.link + '/?length=' + this.props.length )
      .then(
        // data : [ ... {title, desc, time, boardtype, voteCnt, commentCnt, id(link)}]
        returnData => {
          console.log(returnData);
          this.setState({data : returnData.data});
        }
      );
  }

  render(){
    const boxes = [];
    
    const title = [
      <Link to={this.props.link}>{this.props.title}</Link>
    ];
    
    //if it needs plus
    if(this.props.plus){
       title.push(<span><Link to={this.props.link}>더보기</Link></span>);
    }
    
    //title push 
    boxes.push(<h3>{title}</h3>);
    
    /*
    if(this.props.data){
      for(let i=0; i<this.props.data.length; i++){
        boxes.push(
          <CardList
            title={this.props.data[i]['title']}
            time={this.props.data[i]['updateAt']}
          />
        )
      }
    }*/

    for (let i=0; i<this.props.length; i++){
      boxes.push(<CardArticle {...this.state.data}/>);
    }
    
    return(<div className="card" key={this.props.key}>{boxes}</div>);
  }
}

export default Card;