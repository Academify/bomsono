import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import ReservaRegister from './form';
import { useState } from 'react';
import ReservaEdit from './edit';



export default function Reservas(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [reserva, setReserva] = useState({});

  function renderContent(){
    if(creating){
      return(<ReservaRegister setCreating={setCreating} />);
    }else if(editing){
      return(<ReservaEdit setCreating={setCreating} data={reserva} />);
    }else{
      return(
        <>
          <div className='newCliente' onClick={() => setCreating(true)}>Nova Reserva</div>
          <h1>Reservas</h1>
          <div className='clienteTable'>
            <div className='clienteHeader'>
              <h2>Cliente</h2>
              <h2>Number People</h2>
              <h2>Checkin</h2>
              <h2>Tipo do quarto</h2>
              <h2>Ações</h2>
            </div>
            <div className='clienteItem'>
              <h2>Ivo Stonks</h2>
              <h2>3</h2>
              <h2>31/02/2022</h2>
              <h2>5</h2>
              <h2 className='editBtn' onClick={() => {
                setEditing(true)
                setReserva({nome: "Ivo Stonks", numberPeople: 3, checkin: '31/02/2022', checkout: '33/02/2022', tipoQuarto: 5});
              }}>Editar</h2>
            </div>
                      
          </div>
        </>
      );
    }
  }

  return(
    <div className="content">
      <AsideNav/>
      <section>
        <Header/>
        <div className='mainContent'>
          <h1>Reservas</h1>
          <div className='clienteContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
    </div>
  );
}