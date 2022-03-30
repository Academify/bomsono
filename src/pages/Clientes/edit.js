import { useState } from "react";

export default function ClientEdit({setEditing, data}){
  const [editingEndereco, setEditingEndereco] = useState(false);

  function renderFormEndereco(){
    if(editingEndereco){
      return(
        <>
          <h1 className="createEnderecoTitle">Editar Endereço</h1>
          <form className="createEnderecoForm">
            <div className="clienteInputBox">
              <input type="text" name="rua" placeholder={data.endereco.rua} />
              <input type="text" name="bairro" placeholder={data.endereco.bairro}/>
              <input type="text" name="estado" placeholder={data.endereco.estado}/>
            </div>
            <div className="clienteInputBox">
              <input type="number" name="num" placeholder={data.endereco.num} />
              <input type="text" name="cidade" placeholder={data.endereco.cidade}/>
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
          <input type="text" placeholder={data.nome}/>
          <input type="email" placeholder={data.email} />
          <input type="password" placeholder={data.senha} />
        </div>
        <div className="clienteInputBox">
          <input type="number" placeholder={data.telefone} />
          <input type="text" placeholder={data.nacionalidade} />
        </div>
        <div className="clienteButtonBox">
          <button className="clienteRegisterBtn" type="submit" onClick={() => setEditing(false)}>Enviar</button>
          <button className="clienteCreateEndereco" type="reset" onClick={() => setEditingEndereco(true)}>Editar Endereço</button>
        </div>
      </form>
      { renderFormEndereco() }
    </>
    
  );
}