import Header from '../../Components/Header';
import './styles.css';

export default function Login(){
  return(
    <div className="contentLogin">
      <h1>Login</h1>
      <form action="">
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Senha"/>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}