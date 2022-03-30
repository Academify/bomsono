export default function LimpezaEdit({data, setEditing}){
  return(
    <form action="" className="limpezaForm">
        <input type="date" placeholder={data.data}/>
        <input type="search" placeholder={data.funcionario} />
        <input type="search" placeholder={data.quarto} />
        <button className="limpezaRegisterBtn" type="submit" onClick={() => setEditing(false)}>Enviar</button>  
    </form>
  );
}