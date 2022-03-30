import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import LimpezaRegister from './form';
import { useState } from 'react';
import LimpezaEdit from './edit';



export default function Limpeza(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [limpeza, setLimpeza] = useState({});


  function renderContent(){
    if(creating){
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
          <h1>Limpezas</h1>
          <div className='limpezaTable'>
            <div className='limpezaHeader'>
              <h2>Data</h2>
              <h2>Funcionário</h2>
              <h2>Quarto</h2>
              <h2>Ações</h2>
            </div>
            <div className='limpezaItem'>
              <h2>29/03/2022</h2>
              <h2>Thiago</h2>
              <h2>22A</h2>
              <h2 className='editBtn' onClick={() => {
                setEditing(true)
                setLimpeza({data: Date.now(), funcionario: "Thiago", quarto: "22A"});
              }}>Editar</h2>
            </div>
            <div className='limpezaItem'>
              <h2>28/03/2022</h2>
              <h2>Levi</h2>
              <h2>21B</h2>
              <h2 className='editBtn' onClick={() => {
                setEditing(true)
                setLimpeza({data: Date.now(), funcionario: "Levi", quarto: "21B"});
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
          <h1>Limpeza</h1>
          <div className='limpezaContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
  </div>
  );
}