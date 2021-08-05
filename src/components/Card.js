import React, { Component } from 'react';
import './Card.css';

class CardArticle extends Component {
  render(){
    const boxes = [];
    
    boxes.push(<p id="title">{this.props.title}</p>);
    
    boxes.push(<p id="small">{this.props.small}</p>);
    
    boxes.push(<span>{this.props.boardtype}</span>);
    //boxes.push(<time>{this.props.time}</time>);
    
    boxes.push(
      <ul>
        <li className="vote">&#128077; {this.props.voteCnt}</li>
        <li className="comment">&#128172; {this.props.commentCnt}</li>
      </ul>
    );
    
    return(<a className="article" href={this.props.link}>{boxes}</a>);
  }
}



class CardList extends Component {
  render() {
    const boxes = [];
    
    boxes.push(<time>{this.props.time}</time>);
    boxes.push(<p id="title">{this.props.title}</p>);
    
    return(<a className="list" href={this.props.link}>{boxes}</a>);
  }
}



class Card extends Component {
  render(){
    
    console.log(this.props.data);

    const boxes = [];
    
    const title = [
      <a href={this.props.router}>{this.props.title}</a>
    ];
    
    //if it needs plus
    if(this.props.func === 'hot-content' ||
       this.props.func === 'best-boards'){
       title.push(<span href={this.props.router}>더보기</span>);
    }
    
    //title push 
    boxes.push(<h3>{title}</h3>);
    
    const boardtype = ["자유게시판", "장터게시판", "홍보게시판", "비밀게시판"];
    
    
    if(this.props.data){
      for(let i=0; i<this.props.data.length; i++){
        boxes.push(
          <CardList
            title={this.props.data[i]['title']}
            time={this.props.data[i]['updateAt']}
          />
        )
      }
    }


    //if it needs child article type
    if(this.props.type === 'article'){
      for (let i=0; i<2; i++){
        boxes.push(
          <CardArticle 
            title="허걱"
            small="ㅈㄱㄴ"
            boardtype={boardtype[0]}
            voteCnt="10"
            commentCnt="3"
            link="/1/1"
          />
        );
      }
    } else if (this.props.type === 'list'){
      for (let i=0; i<4; i++){
        boxes.push(
          <CardList 
            title="허걱"
            time="방금"
            link="/1/1"
          />
        );
      }
    } else if (this.props.type === 'cardboard'){
      for (let i=0; i<10; i++){
        boxes.push(
          <CardArticle
            title="게시판"
            small="호롤롤롤로"
            time="방금"
            voteCnt="10"
            commentCnt="3"
            link="/1/1"
          />
        )
      }
    }
    
    
    return(<div className="card" id={this.props.func}>{boxes}</div>);
  }
}

export default Card;