import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import LimpezaRegister from './form';
import { useState, useEffect } from 'react';
import LimpezaEdit from './edit';
import api from '../../services/api';

export default function Limpeza(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [limpeza, setLimpeza] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [allCleanings, setAllCleanings] = useState([]);

  useEffect(() => {
    api.get('all-cleanings').then(response => {
      setAllCleanings(response.data);
      setLoading(false);
    })
  });

  function renderContent(){
    if(isLoading) return (<div>Loading...</div>);
    else if(creating){
      return(
        <LimpezaRegister setCreating={setCreating}/>
      );
    }else if(editing){
      return(
        <LimpezaEdit setEditing={setEditing} data={limpeza}/>
      );
    }else{
      return(
        <>
          <div className='newLimpeza' onClick={() => setCreating(true)}>Nova Limpeza</div>
          <div className='limpezaTable'>
            <div className='limpezaHeader'>
              <h2>Data</h2>
              <h2>Funcionário</h2>
              <h2>Quarto</h2>
              <h2>Ações</h2>
            </div>
              {
                allCleanings.map(obj => (              
                  <div className='limpezaItem'>
                    <h2>{(obj.date).substring(0,10)}</h2>
                    <h2>{obj.employee}</h2>
                    <h2>{obj.room}</h2>
                    <h2 className='editBtn' onClick={() => {
                      setLimpeza({id: obj.cleaning_id, data: obj.date, funcionario: obj.employee, quarto: obj.room});
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
          <h1>Limpeza</h1>
          <div className='limpezaContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
  </div>
  );
}