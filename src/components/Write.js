import React, { Component } from 'react';
import './Write.css';

const axios = require('axios');

class Write extends Component {
  constructor(props){
    super(props);

    this.state = {toggle: true, data : {}}

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event){
    event.preventDefault();

    this.setState({})

    axios
      .post(this.props.link, {title: event.target[0].value, desc: event.target[1].value, anonymous: event.target[2].value})
      .then(
        returnData => {
          console.log(returnData);
          window.location.reload();
        }
      );
  }

  render(){
    return(
      <>
      { this.state.toggle
        ?
          <div className="write-hidden">
            <p onClick={()=>{this.setState({toggle: !this.state.toggle})}}>새 글을 작성해주세요!</p>
          </div>
        :
          <div className="write-visible">
            <form onSubmit={this.handleSubmit}>
              <p className="title"><input type="title" name="title" id="title" placeholder="글 제목" autoComplete="off" required /></p>
              <p className="desc"><textarea name="desc" id="desc" placeholder="본문을 작성해주세요" spellCheck="false" required /></p>
              <p className="submit"><input type="submit" value="작성하기" /></p>
              <div className="checkbox">
                <label htmlFor="anonymous">익명</label>
                <input type="checkbox" name="anonymous" id="anonymous"/>
              </div>
            </form>
          </div>
      }
      </>
    );
  }
}

export default Write;