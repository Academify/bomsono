export default function LimpezaRegister({setCreating}){
  return(
    <form className="limpezaForm" action="">
      <input type="date" placeholder='Data da limpeza'/>
      <input type="search" placeholder='Funcionário' />
      <input type="search" placeholder='Quarto' />
      <button className="limpezaRegisterBtn" type="submit" onClick={() => setCreating(false)}>Enviar</button>
    </form>
  );
}