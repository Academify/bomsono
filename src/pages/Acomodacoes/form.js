import { useState, useEffect } from "react";
import api from '../../services/api';

export default function AcomodacaoRegister({setCreating}){

  const [check_in_date, setCheckin] = useState('');
  const [check_out_date, setCheckout] = useState('');
  const [booking, setBooking] = useState('');
  const [room, setRoom] = useState('');
  const [isLoading, setLoading] = useState(true);

  const [allBookings, setAllBookings] = useState([]);
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    api.get('all-bookings').then(response => {
      setAllBookings(response.data);
    });

    api.get('all-rooms').then(response => {
      setAllRooms(response.data);
      setLoading(false);
    })
  });

  if(isLoading) return (<div>Loading...</div>);

  async function handleAccom(e) {
    e.preventDefault();

    const data = {
      check_in_date,
      check_out_date,
      booking,
      room,
    }

    try {
      const response = await api.post('accommodation', data);
      alert(`Cadastro realizado com sucesso!`);
      setCreating(false);
    } catch(err) {
      alert('Não foi possível realizar o cadastro!');
    }
  }

  function bookingRender() {
    if(allBookings.length>0) return(
      allBookings.map(e => (
        <option value={e.booking_id}>{e.booking_id}</option>
      ))
    )
    else return <option value="">-- Nenhuma reserva cadastrada --</option>
  }

  function roomRender() {
    if(allRooms.length>0) return(
      allRooms.map(e => (
        <option value={e.room_id}>Quarto: {e.number} - Hotel: {e.hotel}</option>
      ))
    )
    else return <option value="">-- Nenhuma reserva cadastrada --</option>
  }

  return(
    <>
      <h1 className="createEnderecoTitle">Nova Acomodacao</h1>
      <form onSubmit={handleAccom} className="createEnderecoForm">
        <div className="clienteInputBox">
          <select name="reserva" id="reserva" value={booking} onChange={e => setBooking(e.target.value)}>
            <option style={{}} selected>Selecione a reserva referente:</option>
            {
              bookingRender()
            }
          </select>
          <input type="date" name="checkin" value={check_in_date} onChange={e => setCheckin(e.target.value)} placeholder="checkin" />
          <input type="date" name="checkout" value={check_out_date} onChange={e => setCheckout(e.target.value)} placeholder="checkout"/>
          <select name="number" id="quarto" value={room} onChange={e => setRoom(e.target.value)} placeholder="Quarto">
            <option style={{}} selected>Selecione o quarto referente:</option>
            {
              roomRender()
            }
          </select>
        </div>
        <div className="clienteButtonBox">
          <button className="clienteRegisterBtn" type="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}