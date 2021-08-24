import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Write from './Write';
import axiosConfig from '../axiosConfig';

class CardArticle extends Component {
  render(){
    const boxes = [];
    if(this.props.type === "list"){boxes.push(<time>{this.props.updateAt}</time>);}
    boxes.push(<p id="title">{this.props.title}</p>);
    
    boxes.push(<p id="small">{this.props.content}</p>);
    
    boxes.push(<span>{this.props.boardtype}</span>);
    if(this.props.type === "article"){boxes.push(<time>{this.props.updateAt}</time>);}
    
    if(typeof(this.props.numGood) === "number" && typeof(this.props.numComent) === "number"){
      boxes.push(
        <ul>
          <li className="vote">&#128077; {this.props.numGood}</li>
          <li className="comment">&#128172; {this.props.numComent}</li>
        </ul>
      );
    }
    
    return(<Link className={this.props.type} id={this.props.link} to={this.props.link}>{boxes}</Link>);
  }
}


class Card extends Component {
  state = {
    /*data: {
      title:"허걱",
      content:"ㅈㄱㄴ",
      updateAt:"방금",
      boardtype: "자유게시판",
      numGood:"10",
      numComent:"3",
      link:"/1/1",
      type: this.props.type
    }*/

    /*data : {
      title: "호고곡",
      time: "방금",
      link: "/1/1",
      type: this.props.type
    }*/

    data : {},
    type : this.props.type
    
  }

  //props: {title, style, length, write: boolean, plus : boolean, link, type}
  // {'자유게시판' , 'list', 4, '/1', 'article'}

  getData = () => {
    axiosConfig
      .get(this.props.link + '?length=' + this.props.length + '&type=' + this.props.type)
      .then(
        // data : [ ... {title, desc, time, boardtype, voteCnt, commentCnt, id(link)}]
        returnData => {
          console.log(returnData);
          this.setState({data : returnData.data});
        }
      );
  }

  componentDidMount(){
    if(this.props.type){this.getData();}
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
    if(this.props.write){
      boxes.push(<Write link={this.props.write}/>)
    }

    for (let i=0; i<this.props.length; i++){
      boxes.push(<CardArticle type={this.state.type} {...this.state.data[i]}/>);
    }
    
    return(<div className="card">{boxes}</div>);
  }
}

export default Card;