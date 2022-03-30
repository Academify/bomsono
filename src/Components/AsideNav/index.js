import './styles.css';
import { useNavigate } from "react-router-dom";

export default function AsideNav(){
  const navigate = useNavigate();
  return(
    <aside>
      <div className="logo">
        <h3>Bom sono</h3>
        <h6>Hotéis</h6>
      </div>
      <nav>
        <div className="item" onClick={() => navigate('/')}>Home</div>
        <div className="item" onClick={() => navigate('/hoteis')}>Hotéis</div>
        <div className="item" onClick={() => navigate('/funcionarios')}>Funcionários</div>
        <div className="item" onClick={() => navigate('/quartos')}>Quartos</div>
        <div className="item" onClick={() => navigate('/clientes')}>Clientes</div>
        <div className="item" onClick={() => navigate('/reservas')}>Reservas</div>
        <div className="item" onClick={() => navigate('/acomodacoes')}>Acomodações</div>
        <div className="item" onClick={() => navigate('/limpeza')}>Limpeza</div>
        <div className="item" onClick={() => navigate('/produtos')}>Produtos</div>
      </nav>
    </aside>
  );
}