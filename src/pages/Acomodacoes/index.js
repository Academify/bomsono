import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import { useState } from 'react';
import AcomodacaoRegister from './form';
import AcomodacaoEdit from './edit';


export default function Acomodacoes(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [acomodacao, setAcomodacao] = useState({});

  function renderContent(){
    if(creating){
      return(<AcomodacaoRegister setCreating={setCreating}/>);
    }else if(editing){
      return(<AcomodacaoEdit setEditing={setEditing} data={acomodacao}/>)
    }else{
      return(
        <>
          <div className='newCliente' onClick={() => setCreating(true)}>Nova Reserva</div>
          <h1>Acomodações</h1>
          <div className='clienteTable'>
            <div className='clienteHeader'>
              <h2>Cliente</h2>
              <h2>Number People</h2>
              <h2>Checkin</h2>
              <h2>Quarto</h2>
              <h2>Ações</h2>
            </div>
            <div className='clienteItem'>
              <h2>Ivo Stonks</h2>
              <h2>3</h2>
              <h2>31/02/2022</h2>
              <h2>21B</h2>
              <h2 className='editBtn' onClick={() => {
                setEditing(true)
                setAcomodacao({reserva: 3, checkin: '21/03/2022', checkout: '22/03/2022'});
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
          <h1>Acomodações</h1>
          <div className='clienteContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
    </div>
  );
}