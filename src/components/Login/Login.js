import { Component, useEffect, useState  } from 'react';
import './Login.css'
import api from '../../services/api.js'

export default class Login extends Component {

  render() {
    return (
      <div class = 'container'>
      
        <div class = 'form-login-container'>
          <div class = 'label-login-container'>
              <label class = 'label_login' >Log in</label>
          </div>

          <div class = 'form_container'>

            <div class = 'labels-container'>
              <label class = 'input_label' >Nome</label>
            </div>
            
            <input placeholder='Insira seu nome' type="text" id="name" name="name"/>

            <div class = 'labels-container'>
              <label class = 'input_label' >Senha</label>
            </div>

            <input placeholder='********' type="password" id="name" name="name"/>

            <div class = 'btn-container'>
              <button type="button">Entrar</button>            
            </div>
            
          </div>

        </div>
      </div>
    );

  }

}
  