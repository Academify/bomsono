import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import { useState, useEffect } from 'react';
import ClienteRegister from './form';
import ClientEdit from './edit';
import api from '../../services/api';

export default function Clientes(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [cliente, setCliente] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [allClients, setAllClients] = useState([]);

  useEffect(() => {
    api.get('all-clients').then(response => {
      setAllClients(response.data);
      setLoading(false);
    })
  });

  function renderContent(){
    if(isLoading) return (<div>Loading...</div>);
    else if(creating){
      return(<ClienteRegister setCreating={setCreating}/>);
    }else if(editing){
      return(<ClientEdit setEditing={setEditing} data={cliente}/>);
    }else{
      return(
        <>
          <div className='newCliente' onClick={() => setCreating(true)}>Novo Cliente</div>
          <div className='clienteTable'>
            <div className='clienteHeader'>
              <h2>Nome</h2>
              <h2>Email</h2>
              <h2>Telefone</h2>
              <h2>Ações</h2>
            </div>
              {
                allClients.map(obj => (              
                  <div key={obj.client_id} className='clienteItem'>
                    <h2>{obj.client_name}</h2>
                    <h2>{obj.email}</h2>
                    <h2>{obj.phone}</h2>
                    <h2 className='editBtn' onClick={() => {
                      setCliente({nome: obj.client_name, email: obj.email, telefone: obj.phone, nacionalidade: obj.nationality, senha: '*****', endereco: { rua: 'Rua de casa', num: 22, bairro: 'Centro', cidade: 'Angulacity', estado: 'Minas Gerais'}});
                      setEditing(true);
                    }}>Editar</h2>
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
          <h1>Clientes</h1>
          <div className='clienteContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
  </div>
  );
}