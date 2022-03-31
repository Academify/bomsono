import { useState, useEffect } from "react";
import api from '../../services/api';

export default function LimpezaRegister({setCreating}){

  const [date, setDate] = useState('');
  const [room, setRoom] = useState('');
  const [employee, setEmployee] = useState('');

  const [isLoading, setLoading] = useState(true);
  const [allEmployees, setAllEmployees] = useState([]);
  const [allRooms, setAllRooms] = useState([]);

  useEffect(() => {
    api.get('all-employees').then(response => {
      setAllEmployees(response.data);
    });

    api.get('all-rooms').then(response => {
      setAllRooms(response.data);
      setLoading(false);
    })
  });

  async function handleCleaning(e) {
    e.preventDefault();

    const data = {
      date,
      room,
      employee
    }

    try {
      const response = await api.post('cleaning', data);
      alert(`Cadastro realizado com sucesso!`);
      setCreating(false)
    } catch(err) {
      alert('Não foi possível cadastrar limpeza!');
    }
  }

  function employeeRender() {
    if(allEmployees.length>0) return(
      allEmployees.map(e => (
        <option value={e.employee_id}>{e.name}</option>
      ))
    )
    else return <option value="">-- Nenhuma funcionário cadastrads --</option>
  }

  function roomRender() {
    if(allRooms.length>0) return(
      allRooms.map(e => (
        <option value={e.room_id}>Quarto: {e.number} - Hotel: {e.hotel}</option>
      ))
    )
    else return <option value="">-- Nenhuma quarto cadastrado --</option>
  }

  return(
    <form className="limpezaForm" onSubmit={handleCleaning}>
      <div className="clienteInputBox">
        <input type="date" value={date} onChange={e => setDate(e.target.value)} placeholder="Data da limpeza"/>
        <select value={employee} onChange={e => setEmployee(e.target.value)} placeholder="Funcionário">
          <option style={{}} selected>Selecione o funcionário:</option>
          {employeeRender()}
        </select>
        <select value={room} onChange={e => setRoom(e.target.value)} placeholder='Quarto'>
          <option style={{}} selected>Selecione o quarto:</option>
          {roomRender()}
        </select>
      </div>
      <button className="limpezaRegisterBtn" type="submit">Enviar</button>
    </form>
  );
}