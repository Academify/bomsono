import './styles.css';
import {Link} from 'react-router-dom';

export default function Header(){
  return(
    <header>
      <h1>Sisteminha do Jugurta</h1>
      <Link className='exit' to={"/login"}><h3>Sair</h3></Link>
    </header>
  );
}