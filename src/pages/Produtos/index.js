import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import { useState } from 'react';
import ProductRegister from './form';
import ProductEdit from './edit';


export default function Produtos(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [product, setProduct] = useState({});

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
            <div className='productItem'>
              <h2>1</h2>
              <h2>Coca-Cola</h2>
              <h2>R$ 12,00</h2>
              <h2 className='editBtn' onClick={() => {
                setEditing(true)
                setProduct({nome: "Coca-Cola", preco: 12});
              }}>Editar</h2>
            </div>
            <div className='productItem'>
              <h2>2</h2>
              <h2>Sandubom</h2>
              <h2>R$ 5,75</h2>
              <h2 className='editBtn' onClick={() => {
                setEditing(true)
                setProduct({nome: "Sandubom", preco: 5.75});
              }}>Editar</h2>
            </div>
            
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