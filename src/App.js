import Login from "./components/Login/Login.js";
import "./App.css";
import api from './services/api.js'
import { useEffect, useState  } from 'react';

function App() {
  
  const [user, setUser] = useState();

  console.log(user);

  useEffect(() => {
    api
      .post("http://localhost:3333/users/sign_in",{ 
        utf8: "✓", 
        authenticity_token: "jX4KnKd5w8GELgXJSQzybZnnZl8oDpEfrzXhpZXm+vmBZElFLi2Q0Smg8GhQX+b8TcCUh2CsmpMKd2KMLqa+0A==", 
        user: { 
          email: "fragamatheus823@gmail.com", 
          password: "123456789", 
          remember_me: "0"
        }, 
        commit: "Log in"
      })
      .then((response) => setUser(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, 
  []);

  return (
    <div class = 'general-container'>
      
      <Login />
      <div class = 'login_icon_d20_container'>
        <img class = 'login_icon_d20'src={require('./components/Login/d20_icon.png')} /> 
      </div>
       
    </div>
  );
}

export default App;