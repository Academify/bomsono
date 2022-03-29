import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import { useState } from 'react';
import FuncionarioRegister from './form';
import FuncionarioEdit from './edit';


export default function Funcionarios(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [funcionario, setFuncionario] = useState({});

  function renderContent(){
    if(creating){
      return(<FuncionarioRegister setCreating={setCreating}/>);
    }else if(editing){
      return(<FuncionarioEdit funcionario={funcionario} setEditing={setEditing}/>);
    }else{
      return( 
        <>
          <div className='newFuncionario' onClick={() => setCreating(true)}>Novo Funcionário</div>
          <h1>Tabela de Funcionários</h1>
          <div className='funcionarioTable'>
            <div className='funcionarioHeader'>
              <h2>Nome</h2>
              <h2>CPF</h2>
              <h2>Cargo</h2>
              <h2>Ações</h2>
            </div>
            <div className='funcionarioItem'>
              <h2>Thiago Ferreira</h2>
              <h2>12335685546</h2>
              <h2>Garçom</h2>
              <h2 className='editBtn' onClick={() => {
                setEditing(true)
                setFuncionario({nome: "Thiago", cpf: 12333333333, cargo: "Garçom"})
              }}>Editar</h2>
            </div>
            
          </div>
        </>
      )
    }
  }

  return(
    <div className="content">
      <AsideNav/>
      <section>
        <Header/>
        <div className='mainContent'>
          <h1>Funcionários</h1>
          <div className='funcionariosContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
  </div>
  );
}