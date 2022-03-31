export default function AcomodacaoEdit({setEditing, data}){
  return(
    <>
      <h1 className="createEnderecoTitle">Editar Acomodacao</h1>
      <form action="" className="createEnderecoForm">
        <div className="clienteInputBox">
          <select name="reserva" id="reserva" value={data.reserva}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          <input type="date" name="checkin" placeholder={data.checkin} />
          <input type="date" name="checkout" placeholder={data.checkout}/>
        </div>
        <div className="clienteButtonBox">
          <button className="clienteRegisterBtn" type="submit" onClick={() => setEditing(false)}>Enviar</button>
          <button className="addConsumoBtn" type="button" onClick={() => setEditing(false)}>Novo Consumo</button>
          <button className="geraNotaBtn" type="button" onClick={() => setEditing(false)}>Gerar Nota</button>
        </div>
      </form>
    </>
  );
}