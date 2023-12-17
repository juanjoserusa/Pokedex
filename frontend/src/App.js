import './App.css';
import {Route, Routes} from 'react-router-dom'
import Navegacion from "./components/Navegacion";
import CrearUsuario from "./components/ExplicacionBackend";
import ListaUsuario from "./components/ListaUsuario";
import Explicacion from './components/Explicacion';
import Animation from './components/Animation';
import ExplicacionBackend from './components/ExplicacionBackend';

function App() {
  return (
    <div className="">
        <Navegacion/>
        <div className='container p-4'>
            <Routes>
              <Route path='/' element={<ListaUsuario/>} />
              <Route path='/explicacionBack' element={<ExplicacionBackend/>} />
              <Route path='/frontexplication' element={<Explicacion/>} />
              <Route path='/edit/:id' element={<CrearUsuario/>} />
              <Route path='/animation' element={<Animation/>} />
            </Routes>
        </div>
    </div>
  );
}

export default App;


