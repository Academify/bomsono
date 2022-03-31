import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import ReservaRegister from './form';
import { useEffect, useState } from 'react';
import ReservaEdit from './edit';
import api from '../../services/api';



export default function Reservas(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [reserva, setReserva] = useState({});
  const [reservas, setReservas] = useState([]);
  const [clientes, setClientes] = useState([]);

  useEffect(async () => {
    const response = await api.get('/all-bookings');
    const cli = await api.get('/all-clients');
    setClientes(cli.data);
    setReservas(response.data);
  }, [])

  function bindCliente(id){
    const c = clientes.find(i => i.client_id === id);
    return c.client_name;
  }

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
            {
              reservas.map(item => (
                <div key={item.booking_id} className='clienteItem'>
                  <h2>{bindCliente(item.client)}</h2>
                  <h2>{item.number_people}</h2>
                  <h2>{item.start_date.substring(0, 10)}</h2>
                  <h2>{item.booked_room_type}</h2>
                  <h2 className='editBtn' onClick={() => {
                    setEditing(true)
                  }}>Editar</h2>
                </div>
              ))
            }
                      
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