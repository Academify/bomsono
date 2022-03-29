import { useState } from "react";

export default function FuncionarioRegister({setCreating}){
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("")
  const [cpf, setCpf] = useState(null);

  return(
    <form action="" className="funcionariosForm">
      <div className="funcionarioInputBox">
        <input type="text" placeholder='Nome' onChange={(e) => setName(e.target.value)}/>
        <input type="date" name="birthDate" id="birthDate" placeholder="Data de nascimento" onChange={(e) => setBirthDate(e.target.value)}/>
      </div>
      <div className="funcionarioInputBox">
        <input type="number" className="cpf" maxLength={11} placeholder="CPF" onChange={(e) => setCpf(e.target.value)}/>
        <select name="occupation" id="occupation">
          <option value="Cargo 1">Cargo 1</option>
          <option value="Cargo 2">Cargo 2</option>
          <option value="Cargo 3">Cargo 3</option>
        </select>
      </div>
      <button className="funcionarioRegisterBtn" type="submit" onClick={() => setCreating(false)}>Enviar</button>
    </form>
  );
}