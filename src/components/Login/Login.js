import { Component, useEffect, useState  } from 'react';
import './Login.css'
import axios from 'axios';

export default class Login extends Component {

  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post("http://localhost:3333/users/sign_in",{ 
        utf8: "✓", 
        authenticity_token: "jX4KnKd5w8GELgXJSQzybZnnZl8oDpEfrzXhpZXm+vmBZElFLi2Q0Smg8GhQX+b8TcCUh2CsmpMKd2KMLqa+0A==", 
        user: { 
          email: "fragamatheus823@gmail.com", 
          password: "123456789", 
          remember_me: "0"
        }, 
        commit: "Log in"
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });

  }

  render() {
    return (
      <div class = 'container'>
      
        <div class = 'form-login-container'>

          <form onSubmit={this.handleSubmit}>
            <div class = 'label-login-container'>
                <label class = 'label_login' >Log in</label>
            </div>
            <div class = 'form_container'>

              <div class = 'labels-container'>
                <label class = 'input_label' >Nome</label>
              </div>
              
              <input placeholder='Insira seu nome' type="text" id="name" name="name" onChange={this.handleChange} />

              <div class = 'labels-container'>
                <label class = 'input_label' >Senha</label>
              </div>

              <input placeholder='********' type="password" id="name" name="name" onChange={this.handleChange}/>

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
  