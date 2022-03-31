import { useState, useEffect } from "react";
import api from "../../services/api";

export default function FuncionarioRegister({setCreating}){
  const [name, setName] = useState("");
  const [age, setAge] = useState("")
  const [cpf, setCpf] = useState(null);
  const [occupation, setOccupation] = useState(0);
  const [occupations, setOccupations] = useState([]);

  useEffect(async ()=>{
    const response = await api.get('/all-offices');
    setOccupations(response.data);
  },[]);

  async function handleFuncionario(){
    const data = {
      name,
      age,
      cpf,
      occupation
    }

    const response = await api.post('/employee', data);
    setCreating(false)
  }

  return(
    <form action="" className="funcionariosForm">
      <div className="funcionarioInputBox">
        <input type="text" placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
        <input type="number" name="age" id="age" value={age} placeholder="Idade" onChange={(e) => setAge(e.target.value)}/>
      </div>
      <div className="funcionarioInputBox">
        <input type="number" className="cpf" value={cpf} maxLength={11} placeholder="CPF" onChange={(e) => setCpf(e.target.value)}/>
        <select name="occupation" id="occupation" value={occupation} onChange={(e) => setOccupation(e.target.value)}>
        {
            occupations.map(item => (
              <option key={item.office_id} value={item.office_id}>{item.name}</option>
            ))
          }
        </select>
      </div>
      <button className="funcionarioRegisterBtn" type="submit" onClick={() => handleFuncionario()}>Enviar</button>
    </form>
  );
}