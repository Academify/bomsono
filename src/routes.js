import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Hoteis from './pages/Hoteis';
import Funcionarios from './pages/Funcionarios';
import Quartos from './pages/Quartos';
import Clientes from './pages/Clientes';
import Reservas from './pages/Reservas';
import Acomodacoes from './pages/Acomodacoes';
import Servicos from './pages/Servicos';
import Produtos from './pages/Produtos';

export default function Router(){
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hoteis" element={<Hoteis />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/quartos" element={<Quartos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/acomodacoes" element={<Acomodacoes />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  );  
} 