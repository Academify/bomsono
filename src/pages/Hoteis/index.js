import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import HotelRegister from './form';
import { useState } from 'react';



export default function Hoteis(){
  const [creating, setCreating] = useState(false);

  function renderContent(){
    if(creating){
      return(<HotelRegister setCreating={setCreating}/>);
    }else{
      return( 
        <>
          <div className='newHotel' onClick={() => setCreating(true)}>Novo Hotel</div>
          <h1>Tabela de hoteis</h1>
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
          <h1>Hoteis</h1>
          <div>
            { renderContent() }
          </div>
        </div>
      </section>
  </div>
  );
}