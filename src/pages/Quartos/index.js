import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import QuartoRegister from './form';
import { useState } from 'react';
import QuartoEdit from './edit';


export default function Quartos(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [quarto, setQuarto] = useState({});

  function renderContent(){
    if(creating){
      return(<QuartoRegister setCreating={setCreating}/>);
    }else if(editing){
      return(<QuartoEdit data={quarto} setCreating={setCreating}/>);
    }else{
      return(
        <div className='quartoContentBox'>
          <div className='newQuarto' onClick={() => setCreating(true)}>Novo Quarto</div>
          <h1>Tabela de Quartos</h1>
          <div className='quartoTable'>
            <div className='quartoHeader'>
              <h2>Código</h2>
              <h2>Camas Casal</h2>
              <h2>Camas Solteiro</h2>
              <h2>Ações</h2>
            </div>
            <div className='quartoItem'>
              <h2>1</h2>
              <h2>1</h2>
              <h2>2</h2>
              <h2 className='editBtn' onClick={() => {
                setEditing(true)
                setQuarto({camasCasal: 1, camasSolteiro: 2, valorDiaria: 500, adaptado: false, tv: true, geladeira: true})
              }}>Editar</h2>
            </div>
            
          </div>
        </div>
      );
    }
  }

  return(
    <div className="content">
      <AsideNav/>
      <section>
        <Header/>
        <main className='mainContent'>
          <h1>Quartos</h1>
          <div className='quartoContentBox'>
            { renderContent() }
          </div>
        </main>
      </section>
  </div>
  );
}