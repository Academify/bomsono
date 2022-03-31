export default function ReservaEdit({setCreating, data}){
  return(
    <>
      <h1 className="createEnderecoTitle">Editar Reserva</h1>
      <form action="" className="createEnderecoForm">
        <div className="clienteInputBox">
          <input type="text" name="nome" placeholder={data.nome} />
          <input type="number" name="numberPeople" placeholder={data.numberPeople}/>
          <input type="number" name="tipoQuarto" placeholder={data.tipoQuarto}/>
        </div>
        <div className="clienteInputBox">
          <input type="date" name="checkin" placeholder={data.checkin} />
          <input type="date" name="checkout" placeholder={data.checkout}/>
        </div>
        <div className="clienteButtonBox">
          <button className="clienteRegisterBtn" type="submit" onClick={() => setCreating(false)}>Enviar</button>
        </div>
      </form>
    </>
  );
}