import { useState } from "react";
import api from '../../services/api';

export default function HotelRegister({setCreating}){

  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  async function handleHotel(e) {
    e.preventDefault();

    const data = {
      city,
      state
    }

    try {
      const response = await api.post('hotel', data);
      alert(`Cadastro realizado com sucesso!`);
      setCreating(false)
    } catch(err) {
      alert('Não foi possível cadastrar hotel!');
    }
  }

  return(
    <form onSubmit={handleHotel}>
      <input type="text" placeholder='Cidade' value={city} onChange={e => setCity(e.target.value)}/>
      <input type="text" placeholder='Estado' value={state} onChange={e => setState(e.target.value)}/>
      <button className="hotelRegisterBtn" type="submit">Enviar</button>
    </form>
  );
}