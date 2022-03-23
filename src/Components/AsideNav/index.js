import './styles.css';

export default function AsideNav(){
  return(
    <aside>
      <div className="logo">
        <h3>Bom sono</h3>
        <h6>Hotéis</h6>
      </div>
      <nav>
        <div className="item">Home</div>
        <div className="item">Hotéis</div>
        <div className="item">Funcionários</div>
        <div className="item">Quartos</div>
        <div className="item">Clientes</div>
        <div className="item">Reservas</div>
        <div className="item">Acomodações</div>
        <div className="item">Serviços</div>
        <div className="item">Produtos</div>
      </nav>
    </aside>
  );
}