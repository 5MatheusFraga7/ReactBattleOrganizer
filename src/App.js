import Login from "./components/Login/Login.js";
import "./App.css";

function App() {
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