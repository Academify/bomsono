import './styles.css';
import LoginController from '../../controllers/LoginController';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleLogin(){
    if(LoginController.login(email, password)) navigate('/');
  }

  return(
    <div className="contentLogin">
      <h1>Login</h1>
      <form>
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Senha"onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit" onClick={handleLogin}>Entrar</button>
      </form>
    </div>
  );
}