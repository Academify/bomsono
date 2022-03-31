import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import { useState, useEffect } from 'react';
import AcomodacaoRegister from './form';
import AcomodacaoEdit from './edit';
import api from '../../services/api';


export default function Acomodacoes(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [acomodacao, setAcomodacao] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [allAccom, setAllAccom] = useState([]);

  useEffect(() => {
    api.get('all-accommodations').then(response => {
      setAllAccom(response.data);
      setLoading(false);
    })
  });

  function renderContent(){
    if(isLoading) return (<div>Loading...</div>);
    else if(creating){
      return(<AcomodacaoRegister setCreating={setCreating}/>);
    }else if(editing){
      return(<AcomodacaoEdit setEditing={setEditing} data={acomodacao}/>)
    }else{
      return(
        <>
          <div className='newCliente' onClick={() => setCreating(true)}>Nova Reserva</div>
          <div className='clienteTable'>
            <div className='clienteHeader'>
              <h2>Checkin</h2>
              <h2>Checkout</h2>
              <h2>Quarto</h2>
              <h2>Reserva</h2>
              <h2>Ações</h2>
            </div>
              {
                allAccom.map(obj => (              
                  <div key={obj.acc_id} className='clienteItem'>
                    <h2>{(obj.check_in_date).substring(0,10)}</h2>
                    <h2>{(obj.check_out_date).substring(0,10)}</h2>
                    <h2>{obj.room}</h2>
                    <h2>{obj.booking}</h2>
                    <h2 className='editBtn' onClick={() => {
                      setAcomodacao({reserva: obj.booking, checkin: (obj.check_in_date).substring(0,10), checkout: "20/12/2022"});
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
          <h1>Acomodações</h1>
          <div className='clienteContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
    </div>
  );
}