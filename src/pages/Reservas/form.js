import { useEffect, useState } from "react";
import api from "../../services/api";

export default function ReservaRegister({setCreating}){
  const [client, setClient] = useState("");
  const [number_people, setNumber_people] = useState(0);
  const [booked_room_type, setQuarto] = useState(0);
  const [start_date, setStartDate] = useState(Date.now());
  const [end_date, setEndDate] = useState(Date.now());
  const [clientes, setClientes] = useState([]);
  const [quartos, setQuartos ] = useState([]);

  useEffect(async() => {
    const result = await api.get('/all-clients');
    const qts = await api.get('/all-room-types');
    setQuartos(qts.data);
    setClientes(result.data);
  },[])

  async function handleReserva(){
    const data = {
      client,
      number_people,
      booked_room_type,
      start_date,
      end_date
    }
    await api.post('/booking', data);
    setCreating(false)
  } 
  
  return(
    <>
      <h1 className="createEnderecoTitle">Nova Reserva</h1>
      <form action="" className="createEnderecoForm">
        <div className="clienteInputBox">
          <select name="client" id="client" value={client} onChange={(e) => setClient(e.target.value)}>
            {
              clientes.map(item => (
                <option key={item.client_id} value={item.client_id}>{item.client_name}</option>
              ))
            }
          </select>
          <input type="number" value={number_people} onChange={(e) => setNumber_people(e.target.value)} name="numberPeople" placeholder="Quantidade de gente"/>
          <select name="rt" id="rt" value={booked_room_type} onChange={(e) => setQuarto(e.target.value)}>
            {
              quartos.map(item => (
                <option key={item.room_type_id} value={item.room_type_id}>{item.room_type_id}</option>
              ))
            }
          </select>
        </div>
        <div className="clienteInputBox">
          <input type="date" name="checkin" placeholder="checkin" value={start_date} onChange={(e) => setStartDate(e.target.value)}/>
          <input type="date" name="checkout" placeholder="checkout" value={end_date} onChange={(e) => setEndDate(e.target.value)}/>
        </div>
        <div className="clienteButtonBox">
          <button className="clienteRegisterBtn" type="submit" onClick={() => handleReserva()}>Enviar</button>
        </div>
      </form>
    </>
  );
}