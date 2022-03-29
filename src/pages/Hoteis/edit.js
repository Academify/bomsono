

export default function HotelEdit({cidade, estado, setEditing}){
  return(
    <form action="">
      <input type="text" placeholder={cidade}/>
      <input type="text" placeholder={estado} required/>
      <button className="hotelRegisterBtn" type="submit" onClick={() => setEditing(false)}>Enviar</button>
    </form>
  );
}