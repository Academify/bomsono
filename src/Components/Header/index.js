import './styles.css';
import LoginController from '../../controllers/LoginController';
import { useNavigate } from 'react-router-dom';


export default function Header(){

  const navigate = useNavigate();

  function handleLogout(){
    LoginController.logout();
    navigate('/login');
  }

  return(
    <header>
      <h1>Sisteminha do Jugurta</h1>
      <h3 className='exit'onClick={handleLogout}>Sair</h3>
    </header>
  );
}