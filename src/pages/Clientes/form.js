import { useState } from "react";

export default function ClientRegister({setCreating}){
  const [creatingEndereco, setCreatingEndereco] = useState(false);

  function renderFormEndereco(){
    if(creatingEndereco){
      return(
        <>
          <h1 className="createEnderecoTitle">Novo Endereço</h1>
          <form action="" className="createEnderecoForm">
            <div className="clienteInputBox">
              <input type="text" name="rua" placeholder="Rua" />
              <input type="text" name="bairro" placeholder="Bairro"/>
              <input type="text" name="estado" placeholder="Estado"/>
            </div>
            <div className="clienteInputBox">
              <input type="number" name="num" placeholder="Nº" />
              <input type="text" name="cidade" placeholder="Cidade"/>
            </div>
          </form>
        </>
      );
    }
  }

  return(
    <>
      <form className="limpezaForm" action="">
        <div className="clienteInputBox">
          <input type="text" placeholder='Nome'/>
          <input type="email" placeholder='Email' />
          <input type="password" placeholder='Senha' />
        </div>
        <div className="clienteInputBox">
          <input type="number" placeholder='Telefone' />
          <input type="text" placeholder='Nacionalidade' />
        </div>
        <div className="clienteButtonBox">
          <button className="clienteRegisterBtn" type="submit" onClick={() => setCreating(false)}>Enviar</button>
          <button className="clienteCreateEndereco" type="button" onClick={() => setCreatingEndereco(true)}>Novo Endereço</button>
        </div>
      </form>
      { renderFormEndereco() }
    </>
    
  );
}