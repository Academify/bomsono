export default function AcomodacaoRegister({setCreating}){
  return(
    <>
      <h1 className="createEnderecoTitle">Nova Acomodacao</h1>
      <form action="" className="createEnderecoForm">
        <div className="clienteInputBox">
          <select name="reserva" id="reserva">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
          </select>
          <input type="date" name="checkin" placeholder="checkin" />
          <input type="date" name="checkout" placeholder="checkout"/>
        </div>
        <div className="clienteButtonBox">
          <button className="clienteRegisterBtn" type="submit" onClick={() => setCreating(false)}>Enviar</button>
        </div>
      </form>
    </>
  );
}