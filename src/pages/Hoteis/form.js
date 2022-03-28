
export default function HotelRegister({setCreating}){

  return(
    <form action="">
      <input type="text" placeholder='Cidade'/>
      <input type="text" placeholder='Estado' />
      <button type="submit" onClick={() => setCreating(false)}>Enviar</button>
    </form>
  );
}