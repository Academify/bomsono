import './styles.css';
import { useNavigate } from 'react-router-dom';

export default function Header(){
  const navigate = useNavigate();
  return(
    <header>
      <h1>Sisteminha do Jugurta</h1>
      <h3 className='exit' onClick={()=>navigate('/login')}>Sair</h3>
    </header>
  );
}