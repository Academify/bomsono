export default function ProductRegister({setCreating}){
  return(
    <form className="productForm" action="">
      <input type="text" placeholder='Nome'/>
      <input type="number" placeholder='Preço' />
      <button className="productRegisterBtn" type="submit" onClick={() => setCreating(false)}>Enviar</button>
    </form>
  );
}