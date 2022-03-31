import './styles.css';
import AsideNav from '../../Components/AsideNav';
import Header from '../../Components/Header';
import HotelRegister from './form';
import HotelEdit from './edit';
import api from '../../services/api';
import { useState, useEffect } from 'react';



export default function Hoteis(){
  const [creating, setCreating] = useState(false);
  const [editing, setEditing] = useState(false);
  const [hotel, setHotel] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [allHotels, setAllHotels] = useState([]);

  useEffect(() => {
    api.get('all-hotels').then(response => {
      setAllHotels(response.data);
      setLoading(false);
    })
  });

  function renderContent(){
    if(isLoading) return (<div>Loading...</div>);
    else if(creating){
      return(<HotelRegister setCreating={setCreating}/>);
    }else if(editing){
      return(<HotelEdit setEditing={setEditing} cidade={hotel.cidade} estado={hotel.estado}/>)
    }else{
      return( 
        <>
          <div className='newHotel' onClick={() => setCreating(true)}>Novo Hotel</div>
          <div className='hotelTable'>
            <div className='hotelHeader'>
              <h2>Código</h2>
              <h2>Cidade</h2>
              <h2>Estado</h2>
              <h2>Ações</h2>
            </div>
              {
                allHotels.map(obj => (              
                  <div className='hotelItem'>
                    <h2>{obj.hotel_id}</h2>
                    <h2>{obj.city}</h2>
                    <h2>{obj.state}</h2>
                    <h2 className='editBtn' onClick={() => {          
                      setHotel({cidade: obj.city, estado: obj.state});
                      setEditing(true);
                    }}>Editar</h2>
                  </div>                
                ))
              }           
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
          <h1>Hoteis</h1>
          <div className='hotelContentBox'>
            { renderContent() }
          </div>
        </div>
      </section>
  </div>
  );
}