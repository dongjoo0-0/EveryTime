import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../eevee.svg';
import './form.css';

const axios = require('axios');

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {id : "", password : "", checked: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.idInput = React.createRef();
  }

  handleChange(event) {
    let newState = Object.assign({}, this.state);
    newState[event.target.id] = event.target.value;
    this.setState(newState);
    if(event.target.id === "id"){
      event.target.setCustomValidity("아이디 중복확인을 하지 않았습니다.");
      if(this.state.checked){
        this.setState({checked: false});
      }
    }
  }

  handleConfirm(event) {
    if(this.state.password !== event.target.value){
      event.target.setCustomValidity("비밀번호가 일치하지 않습니다.");
    } else {
      event.target.setCustomValidity("");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:3000/register", this.state)
      .then(() => {this.props.history.push("/")});
  }

  handleClick(event) {
    axios
      .post("http://localhost:3000/register/id", {id: this.state.id})
      .then(
        /* returnData : Object
         .data : boolean (true or false)
         if id is duplicated, returnData.data is false.
         if id is unique, returnData.data is true */
        returnData => {
          if(returnData.data){
            this.setState({checked: true});
            this.idInput.current.setCustomValidity("");
          } else {
            // id is duplicated
            alert("이미 존재하는 아이디입니다.");
          }
        }
      );
  }

  render(){
    return(
      <div className="form">
        <span><strong>회원가입</strong>에 필요한 정보입니다.</span>
        <Link className="logo" to="/"><img src={logo} alt="logo" /></Link>
        <form onSubmit={this.handleSubmit}>
          <p className="input"><input type="text" name="id" id="id" placeholder="아이디" onChange={this.handleChange} ref={this.idInput} required /></p>
          <p className="submit"><input type="button" name="id-checker" id="id-checker" onClick={this.handleClick} value="중복확인" required /></p>
          <p className="input"><input type="password" name="password" id="password" placeholder="비밀번호" onChange={this.handleChange} required /></p>
          <p className="input"><input type="password" name="password-confirm" id="password-confirm" placeholder="비밀번호 확인" onChange={this.handleConfirm} required /></p>
          <p className="submit"><input type="submit" value="회원가입" /></p>
        </form>
      </div>
    );
  }
}

export default withRouter(Register);