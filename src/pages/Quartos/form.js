import { useState } from "react";
import api from "../../services/api";

export default function QuartosRegister({setCreating}){
  const [casal, setCasal] = useState(0);
  const [solteiro, setSolteiro] = useState(0);
  const [adaptado, setAdaptado] = useState(false);
  const [hasTv, setHasTv] = useState(false);
  const [hasFridge, setHasFridge] = useState(0);
  const [dailyPrice, setdailyPrice] = useState(0);

  async function handleQuarto(){
    const data = {
      num_double_bed: casal,
      num_single_bed: solteiro,
      special_needs: adaptado,
      has_tv: hasTv,
      has_fridge: hasFridge,
      daily_price: dailyPrice
    }
    await api.post('/room-type', data);
    setCreating(false)
  }

  return(
    <form action="" className="quartoForm">
      <div className="funcionarioInputBox">
        <input type="number" value={casal} placeholder='Nº Camas casal' onChange={(e) => setCasal(e.target.value)}/>
        <input type="number" value={solteiro} placeholder='Nº Camas solteiro'onChange={(e) => setSolteiro(e.target.value)}/>
        <input type="number" value={dailyPrice} placeholder='Valor Diária' onChange={(e) => setdailyPrice(e.target.value)}/>
      </div>
      <div className="funcionarioInputBox">
        <div className="checkboxDiv">
          <input name="quartoAdaptado" value={adaptado} type="checkbox" className="quartoAdaptado" onChange={(e) => setAdaptado(e.target.value)}/>
          <label htmlFor="quartoAdaptado" className="labelCheckbox">Quarto Adaptado?</label>
        </div>
        <div className="checkboxDiv">
          <input name="quartoAdaptado" value={hasTv} type="checkbox" className="quartoAdaptado" onChange={(e) => setHasTv(e.target.value)}/>
          <label htmlFor="quartoAdaptado" className="labelCheckbox">Tem TV?</label>
        </div>
        <div className="checkboxDiv">
          <input name="quartoAdaptado" value={hasFridge} type="checkbox" className="quartoAdaptado" onChange={(e) => setHasFridge(e.target.value)}/>
          <label htmlFor="quartoAdaptado" className="labelCheckbox">Tem geladeira?</label>
        </div>
      </div>
      <button className="quartoRegisterBtn" type="submit" onClick={() => handleQuarto()}>Enviar</button>  
    </form>
  );
}