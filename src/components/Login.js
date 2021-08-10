import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';
import logo from '../eevee.svg';
import './form.css';

const axios = require('axios');

class Login extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    axios
      .post('http://localhost:3000/login', {id: event.target[0].value, password: event.target[1].value})
      .then(
        returnData => {
          if(returnData.data.result){
            this.props.setState(true);
            this.props.history.push("/");
          } else {
            alert(returnData.data.reason);
          }
        }
      );
  }

  render(){
    return(
      <div className="form">
        <span>지금 <strong>이브이타임</strong>을 시작하세요!</span>
        <Link className="logo" to="/"><img src={logo} alt="logo" /></Link>
        <form onSubmit={this.handleSubmit}>
          <p className="input"><input type="text" name="id" id="id" placeholder="아이디" required /></p>
          <p className="input"><input type="password" name="password" id="password" placeholder="비밀번호" required /></p>
          <p className="submit"><input type="submit" value="로그인" /></p>
        </form>
        <p align="center">아직 회원이 아니신가요? <Link className="register" to="/register">회원가입</Link></p>
      </div>
    );
  }
}

export default withRouter(Login);