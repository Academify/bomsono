import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import { useState } from 'react';
import ClienteRegister from './form';
import ClientEdit from './edit';

export default function Clientes(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [cliente, setCliente] = useState({});

  function renderContent(){
    if(creating){
      return(<ClienteRegister setCreating={setCreating}/>);
    }else if(editing){
      return(<ClientEdit setEditing={setEditing} data={cliente}/>);
    }else{
      return(
        <>
          <div className='newCliente' onClick={() => setCreating(true)}>Novo Cliente</div>
          <h1>Clientes</h1>
          <div className='clienteTable'>
            <div className='clienteHeader'>
              <h2>Nome</h2>
              <h2>Email</h2>
              <h2>Telefone</h2>
              <h2>Ações</h2>
            </div>
            <div className='clienteItem'>
              <h2>Ivo Stonks</h2>
              <h2>ivo@stonks.com</h2>
              <h2>34234234-2342443</h2>
              <h2 className='editBtn' onClick={() => {
                setEditing(true)
                setCliente({nome: "Ivo Stonks", email: "ivo@stonks.com", telefone: 123123123123, nacionalidade: 'Angulano', senha: '*****', endereco: { rua: 'Rua de casa', num: 22, bairro: 'Centro', cidade: 'Angulacity', estado: 'Minas Gerais'}});
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
          <h1>Clientes</h1>
          <div className='clienteContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
  </div>
  );
}