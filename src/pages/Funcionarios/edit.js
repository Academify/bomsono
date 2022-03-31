import { useEffect, useState } from "react";
import api from "../../services/api";

export default function FuncionarioEdit({funcionario, setEditing}){
  const [name, setName] = useState("");
  const [age, setAge] = useState("")
  const [cpf, setCpf] = useState(null);
  const [occupation, setOccupation] = useState(0);
  
  const [occupations, setOccupations] = useState([]);
  useEffect(async ()=>{
    const response = await api.get('/all-offices');
    setOccupations(response.data);
  },[]);

  async function handleEdit(){
    const id = funcionario.employee_id;
    const data = {
      name,
      age,
      cpf,
      occupation
    }
    const response = await api.patch(`/employee?id=${id}`, data);
    alert("Funcionário editado com sucesso!");
    setEditing(false)
  }

  return(
    <form action="" className="funcionariosForm">
      <div className="funcionarioInputBox">
        <input type="text" defaultValue={funcionario.name}  onChange={(e) => setName(e.target.value) }/>
        <input type="number"  defaultValue={funcionario.age} name="age" id="age" onChange={(e) => setAge(e.target.value)}/>
      </div>
      <div className="funcionarioInputBox">
        <input type="number" className="cpf" maxLength={11} defaultValue={funcionario.cpf}  onChange={(e) => setCpf(e.target.value)}/>
        <select name="occupation" id="occupation" defaultValue={funcionario.occupation} onChange={(e) => setOccupation(e.target.value)}>
          {
            occupations.map(item => (
              <option key={item.office_id} value={item.office_id}>{item.name}</option>
            ))
          }
        </select>
      </div>
      <button className="funcionarioRegisterBtn" type="submit" onClick={() => handleEdit()}>Enviar</button>
    </form>
  );
}