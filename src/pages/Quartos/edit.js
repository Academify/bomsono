export default function QuartoEdit({data, setEditing}){
  return(
    <form action="" className="quartoForm">
      <div className="funcionarioInputBox">
        <input type="number" placeholder={data.camasCasal}/>
        <input type="number" placeholder={data.camasSolteiro}/>
        <input type="number" placeholder={data.valorDiaria}/>
      </div>
      <div className="funcionarioInputBox">
        <div className="checkboxDiv">
          <input name="quartoAdaptado" type="checkbox" className="quartoAdaptado" checked={data.adaptado}/>
          <label htmlFor="quartoAdaptado" className="labelCheckbox">Quarto Adaptado?</label>
        </div>
        <div className="checkboxDiv">
          <input name="quartoAdaptado" type="checkbox" className="quartoAdaptado" checked={data.tv}/>
          <label htmlFor="quartoAdaptado" className="labelCheckbox">Tem TV?</label>
        </div>
        <div className="checkboxDiv">
          <input name="quartoAdaptado" type="checkbox" className="quartoAdaptado" checked={data.geladeira}/>
          <label htmlFor="quartoAdaptado" className="labelCheckbox">Tem geladeira?</label>
        </div>
      </div>
      <button className="quartoRegisterBtn" type="submit" onClick={() => setEditing(false)}>Enviar</button>  
    </form>
  );
}