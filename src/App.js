import './App.css';
import { Route, Routes } from 'react-router-dom';
import Inicio from './Paginas/Inicio';
import Microsoft from './Paginas/Microsoft';
import Navegador from './Paginas/Navegador';
import MacOS from './Paginas/MacOS';
import Linux from './Paginas/Linux';
import Acercade from './Paginas/Acercade';
import Brave from './Paginas/Brave';
import Form from './Paginas/Form';
import Galeria from './Paginas/Galeria';
import Google from './Paginas/Google';
import Android from './Paginas/Android';



function App() {
  return (
    <div>
      <Navegador/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/Microsoft' element={<Microsoft/>}/>
        <Route path='/MacOS' element={<MacOS/>}/>
        <Route path='/Linux' element={<Linux/>}/>
        <Route path='/Acercade' element={<Acercade/>}/>
        <Route path='/Brave' element={<Brave/>}/>
        <Route path='/Form' element={<Form/>}/>
        <Route path='/Galeria' element={<Galeria/>}/>
        <Route path='/Google' element={<Google/>}/>
        <Route path='/Android' element={<Android/>}/>
      </Routes>
    </div>
  );
}

export default App;
