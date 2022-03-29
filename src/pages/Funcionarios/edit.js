export default function FuncionarioEdit({funcionario, setEditing}){
  return(
    <form action="" className="funcionariosForm">
      <div className="funcionarioInputBox">
        <input type="text" placeholder={funcionario.nome}/>
        <input type="date" name="birthDate" id="birthDate" placeholder={funcionario.birthDate}/>
      </div>
      <div className="funcionarioInputBox">
        <input type="number" className="cpf" maxLength={11} placeholder={funcionario.cpf}/>
        <select name="occupation" id="occupation" placeholder={funcionario.occupation}>
          <option value="Cargo 1">Cargo 1</option>
          <option value="Cargo 2">Cargo 2</option>
          <option value="Cargo 3">Cargo 3</option>
        </select>
      </div>
      <button className="funcionarioRegisterBtn" type="submit" onClick={() => setEditing(false)}>Enviar</button>
    </form>
  );
}