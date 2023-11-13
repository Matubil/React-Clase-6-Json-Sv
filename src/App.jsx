import logo from './logo.svg';
import './App.css';
import Cabecera from './components/Cabecera';
// import * as ReactRouter from "react-router-dom" //importo todo para tener el autocompletado
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"
import Products from './pages/Products';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Editor from './pages/Editor';

function App() {
  return (
    <BrowserRouter>
      <Cabecera titulo={"Bienvenidos a mi clase de React"} subtitulo={"Clase nro 6"}/>
      {/* reemplaza mas o menos a la etiqueta a el ReactRouter.link */}
      <nav className='bg-dark text-light'>        
        <ul className='nav justify-content-center'>
          <li className='nav-item'><Link className='nav-link' to="/" title='Home'>Home</Link></li>
          <li className='nav-item'><Link className='nav-link' to="Products" title="Productos">Productos</Link></li>
          <li className='nav-item'><Link className='nav-link' to="Contact" title='Contacto'>Contacto</Link></li>
          {/* con link no refresca toda la pagina sino el link no mas */}
          {/* si en vez del componente Link uso una ancla html estandar a, veo que el comportamiento es que refresca (No seria una SPA)
          <li className='nav-item'><a className='nav-link' href="/Contacto2" title='Contacto con etiqueta a'>Contacto con etiqueta a</a></li> */}
        </ul>
      </nav>   
      <main className='container'>
          <Routes>
            {/* Lo que este dentro de Routes, se renderiza condicionalmente, dependiendo de la url que aparece en el navegador */}
            <Route path='/' Component={Home}/> {/* esta forma no sirve para pasar props usando Component, entonces hay que pasarle elements*/}
            <Route path='/Products' element={<Products titulo="Pagina de productos"/>}/>{/*Esta es la forma de pasarle props */}
            <Route path='/Products/:id' element={<Editor/>}/>
            <Route path='/Contact' Component={Contact}/>
          </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
