export default function ProductEdit({data, setEditing}){
  return(
    <form action="" className="productForm">
        <input type="number" placeholder={data.nome}/>
        <input type="number" placeholder={data.preco}/>
      <button className="productRegisterBtn" type="submit" onClick={() => setEditing(false)}>Enviar</button>  
    </form>
  );
}