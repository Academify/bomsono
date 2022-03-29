
export default function QuartosRegister({setCreating}){

  return(
    <form action="" className="quartoForm">
      <div className="funcionarioInputBox">
        <input type="number" placeholder='Nº Camas casal'/>
        <input type="number" placeholder='Nº Camas solteiro'/>
        <input type="number" placeholder='Valor Diária'/>
      </div>
      <div className="funcionarioInputBox">
        <div className="checkboxDiv">
          <input name="quartoAdaptado" type="checkbox" className="quartoAdaptado"/>
          <label htmlFor="quartoAdaptado" className="labelCheckbox">Quarto Adaptado?</label>
        </div>
        <div className="checkboxDiv">
          <input name="quartoAdaptado" type="checkbox" className="quartoAdaptado"/>
          <label htmlFor="quartoAdaptado" className="labelCheckbox">Tem TV?</label>
        </div>
        <div className="checkboxDiv">
          <input name="quartoAdaptado" type="checkbox" className="quartoAdaptado"/>
          <label htmlFor="quartoAdaptado" className="labelCheckbox">Tem geladeira?</label>
        </div>
      </div>
      <button className="quartoRegisterBtn" type="submit" onClick={() => setCreating(false)}>Enviar</button>  
    </form>
  );
}