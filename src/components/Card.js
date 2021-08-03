import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
  render(){
    return(
      <div className="card">
        {
          {
            'real-time-best': 
              <h3>실시간 인기 글</h3>
              ,
            'hot-content' : 
              <h3>
                <a href="/hotcontent">HOT 게시글</a>
                <span href="/hotcontent">더 보기</span>
              </h3>,
            'best-boards' : 
              <h3>
                <a href="/bestboards">BEST 게시판</a>
                <span href="/bestboards">더 보기</span>
              </h3>
          }[this.props.func]
        }
      </div>
    );
  }
}

export default Card;