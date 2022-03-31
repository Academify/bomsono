export default function ReservaRegister({setCreating}){
  return(
    <>
      <h1 className="createEnderecoTitle">Nova Reserva</h1>
      <form action="" className="createEnderecoForm">
        <div className="clienteInputBox">
          <input type="text" name="nome" placeholder="Nome" />
          <input type="number" name="numberPeople" placeholder="Quantidade de gente"/>
          <input type="number" name="tipoQuarto" placeholder="Tipo do Quarto"/>
        </div>
        <div className="clienteInputBox">
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