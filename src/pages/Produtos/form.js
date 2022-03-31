import { useState } from "react";
import api from "../../services/api";

export default function ProductRegister({setCreating}){
  const [name, setName] = useState("");
  const [product_price, setProduct_price] = useState("");

  async function handleProduct(){
    const data = {
      name,
      product_price
    };

    await api.post('/product', data);
    setCreating(false)
  }

  return(
    <form className="productForm" action="">
      <input type="text" placeholder='Nome' value={name} onChange={(e) => setName(e.target.value)}/>
      <input type="number" placeholder='Preço' value={product_price} onChange={(e) => setProduct_price(e.target.value)}/>
      <button className="productRegisterBtn" type="submit" onClick={() => handleProduct()}>Enviar</button>
    </form>
  );
}