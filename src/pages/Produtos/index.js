import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import { useEffect, useState } from 'react';
import ProductRegister from './form';
import ProductEdit from './edit';
import api from '../../services/api';


export default function Produtos(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(async() => {
    const response = await api.get('/all-products');
    setProducts(response.data);
  },[])

  function renderContent(){
    if(creating){
      return(<ProductRegister setCreating={setCreating}/>);
    }else if(editing){
      return(<ProductEdit setEditing={setEditing} data={product}/>)
    }else{
      return(
        <>
          <div className='newProduct' onClick={() => setCreating(true)}>Novo Produto</div>
          <h1>Produtos</h1>
          <div className='productTable'>
            <div className='productHeader'>
              <h2>Código</h2>
              <h2>Nome</h2>
              <h2>Preço</h2>
              <h2>Ações</h2>
            </div>
            {
              products.map(item => (
                <div key={item.product_id} className='productItem'>
                  <h2>{item.product_id}</h2>
                  <h2>{item.name}</h2>
                  <h2>{item.product_price}</h2>
                  <h2 className='editBtn' onClick={() => setEditing(true)}>Editar</h2>
                </div>
              ))
            }
            
          </div>
        </>
      );
    }
  }

  return(
    <div className="content">
      <AsideNav/>
      <section>
        <Header/>
        <div className='mainContent'>
          <h1>Produtos</h1>
          <div className='productContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
  </div>
  );
}