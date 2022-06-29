import { Component } from 'react';
import './Login.css'
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../Navbar/Navbar';
export default class Login extends Component {

  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {

    var _this = this;

    event.preventDefault();

    axios.post("http://localhost:3333/users/sign_in",{ 
        utf8: "✓", 
        authenticity_token: "jX4KnKd5w8GELgXJSQzybZnnZl8oDpEfrzXhpZXm+vmBZElFLi2Q0Smg8GhQX+b8TcCUh2CsmpMKd2KMLqa+0A==", 
        user: { 
          email: "fragamatheus8234@gmail.com", 
          password: "123456789", 
          remember_me: "0"
        }, 
        commit: "Log in"
      })
      .then(res => {

        console.log("GO");
        window.location.href = "localhost:3000/home";
        
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }

  redirectToHome = (params) => {
    console.log("GO");
    window.location.href = "localhost:3000/home";
  }

  showErrors = (params) => {
    console.log('Error:');
    console.log(params);
  }
  
  render() {

    <Router>
      <Route exact path="/home" component={Home}/>
    </Router>

    return (
      <div class = 'container'>
      
        <div class = 'form-login-container'>

          <form onSubmit = { this.handleSubmit } >
            <div class = 'label-login-container'>
                <label class = 'label_login' >Log in</label>
            </div>
            <div class = 'form_container'>
              <div class = 'labels-container'>
                <label class = 'input_label' >E-mail</label>
              </div>      
              <input placeholder = 'Insira seu e-mail' type="email" id="email" name="email" onChange = { this.handleChange } />

              <div class = 'labels-container'>
                <label class = 'input_label' >Senha</label>
              </div>
              <input placeholder = '********' type = "password" id = "password" name = "password" onChange = { this.handleChange } />

              <div class = 'btn-container'>
                <button type="submit" >Entrar</button>            
              </div>
              
            </div>
          </form>        

        </div>
      </div>
    );

  }

}
  