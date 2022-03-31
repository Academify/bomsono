import { useState, useEffect } from "react";
import api from '../../services/api';

export default function LimpezaEdit({data, setEditing}){

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
      console.log(data);
      setLoading(false);
    })
  });

  async function handleCleaning(e) {
    e.preventDefault();

    const pushData = {
      date,
      room,
      employee
    }

    try {
      const response = await api.patch(`cleaning?id=${data.id}`, pushData);
      alert(`Edição realizada com sucesso!`);
      setEditing(false);
    } catch(err) {
      alert('Não foi possível editar limpeza!');
    }
  }

  function employeeRender() {
    if(allEmployees.length>0) return(
      allEmployees.map(e => (
        <option value={e.employee_id}>{e.name}</option>
      ))
    )
    else return <option value="">-- Nenhuma funcionário cadastrado --</option>
  }

  function roomRender() {
    if(allRooms.length>0) return(
      allRooms.map(e => (
        <option value={e.room_id}>Quarto: {e.number} - Hotel: {e.hotel}</option>
      ))
    )
    else return <option value="">-- Nenhuma quarto cadastrado --</option>
  }

  if(isLoading) return <div>Loading...</div>

  return(
    <form onSubmit={handleCleaning} className="limpezaForm">
        <input type="date" placeholder={data.data} defaultValue={date} onChange={e => setDate(e.target.value)}/>
        <select defaultValue={data.funcionario} onChange={e => setEmployee(e.target.value)} placeholder="Funcionário">
          <option style={{}} selected>Selecione o funcionário:</option>
          {employeeRender()}
        </select>
        <select defaultValue={data.quarto} onChange={e => setRoom(e.target.value)} placeholder='Quarto'>
          <option style={{}} selected>Selecione o quarto:</option>
          {roomRender()}
        </select>
        <button className="limpezaRegisterBtn" type="submit">Enviar</button>  
    </form>
  );
}